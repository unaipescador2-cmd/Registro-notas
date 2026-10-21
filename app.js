// ============================================
// FASE 4 · Conexión de la página con las funciones
// ============================================

// La lista verdadera: la que se queda guardada.
// Filtrar y ordenar NO la cambian: solo cambian lo que se ve.
const alumnos = [...ALUMNOS_INICIALES];

// ---------- Mensajes ----------

function mostrarMensaje(texto, esError) {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = texto;
  mensaje.className = esError ? "mensaje error" : "mensaje ok";
}

// ---------- Dibujar ----------

// Única función que dibuja la tabla. Se llama cada vez que algo cambia.
function pintarTabla() {
  const filtro = document.getElementById("filtro").value;
  const orden = document.getElementById("orden").value;
  const cuerpo = document.getElementById("cuerpo-tabla");

  // 1. Aplicar filtro y orden (trabajan con copias)
  const visibles = ordenarAlumnos(filtrarAlumnos(alumnos, filtro), orden);

  // 2. Vaciar la tabla
  cuerpo.replaceChildren();

  // 3. Si no hay nada que mostrar, escribir un mensaje en la tabla
  if (visibles.length === 0) {
    const fila = document.createElement("tr");
    const celda = document.createElement("td");
    celda.colSpan = 3;
    celda.className = "vacio";
    celda.textContent = "No hay alumnos que mostrar.";
    fila.appendChild(celda);
    cuerpo.appendChild(fila);
  }

  // 4. Escribir una fila por alumno
  visibles.forEach((alumno) => {
    const fila = document.createElement("tr");

    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = alumno.nombre;

    const celdaNota = document.createElement("td");
    celdaNota.textContent = alumno.nota;
    celdaNota.className = alumno.nota >= 5 ? "aprobado" : "suspenso";

    const celdaBorrar = document.createElement("td");
    const botonBorrar = document.createElement("button");
    botonBorrar.type = "button";
    botonBorrar.className = "borrar";
    botonBorrar.textContent = "✕";
    botonBorrar.setAttribute("aria-label", "Borrar a " + alumno.nombre);
    botonBorrar.addEventListener("click", () => manejarBorrar(alumno.nombre));
    celdaBorrar.appendChild(botonBorrar);

    fila.append(celdaNombre, celdaNota, celdaBorrar);
    cuerpo.appendChild(fila);
  });

  // 5. El resumen siempre se actualiza con la tabla
  pintarResumen();
}

// El resumen usa la lista completa, no la que se ve filtrada.
function pintarResumen() {
  const total = alumnos.length;
  const media = notaMedia(alumnos).toFixed(2);
  const maxima = notaMaxima(alumnos);
  const cuantosAprobados = aprobados(alumnos).length;

  document.getElementById("resumen").textContent =
    `Alumnos: ${total}\n` +
    `Nota media: ${media}\n` +
    `Nota máxima: ${maxima === null ? "-" : maxima}\n` +
    `Aprobados: ${cuantosAprobados}`;
}

// ---------- Acciones ----------

function manejarAnadir(evento) {
  evento.preventDefault();

  // 1. Leer
  const nombre = document.getElementById("nombre").value.trim();
  const textoNota = document.getElementById("nota").value.trim().replace(",", ".");

  // 2. Comprobar las tres cosas
  if (nombre === "") {
    mostrarMensaje("El nombre no puede estar vacío.", true);
    return;
  }
  if (buscarPorNombre(alumnos, nombre) !== undefined) {
    mostrarMensaje("Ya hay un alumno llamado " + nombre + ".", true);
    return;
  }
  if (!esNotaValida(textoNota)) {
    mostrarMensaje("La nota tiene que ser un número entre 0 y 10.", true);
    return;
  }

  // 3. Añadir y volver a dibujar
  anadirAlumno(alumnos, nombre, Number(textoNota));
  pintarTabla();

  // 4. Avisar y dejar el formulario listo para el siguiente
  mostrarMensaje(nombre + " añadido.", false);
  document.getElementById("formulario-alumno").reset();
  document.getElementById("nombre").focus();
}

function manejarBorrar(nombre) {
  borrarPorNombre(alumnos, nombre);
  mostrarMensaje(nombre + " borrado.", false);
  pintarTabla();
}

// ---------- Conectar la página ----------

document.getElementById("filtro").addEventListener("change", pintarTabla);
document.getElementById("orden").addEventListener("change", pintarTabla);
document.getElementById("formulario-alumno").addEventListener("submit", manejarAnadir);

// Primer dibujo al cargar la página
pintarTabla();