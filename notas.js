// FASE 2 · Añadir, quitar, buscar y ordenar


const ALUMNOS_INICIALES = [
  { nombre: "Ana", nota: 7.5 },
  { nombre: "Luis", nota: 4 },
  { nombre: "Marta", nota: 9.25 },
  { nombre: "Pablo", nota: 5 },
  { nombre: "Lucía", nota: 10 },
  { nombre: "Diego", nota: 3.5 },
  { nombre: "Elena", nota: 6.75 },
  { nombre: "Hugo", nota: 9 },
  { nombre: "Sara", nota: 1 },
  { nombre: "Iván", nota: 5.5 },
];

// ---------- Funciones que CAMBIAN la lista ----------

function anadirAlumno(lista, nombre, nota) {
  return lista.push({ nombre, nota });
}

function quitarUltimo(lista) {
  return lista.pop();
}

function insertarEn(lista, posicion, nombre, nota) {
  lista.splice(posicion, 0, { nombre, nota });
}

function borrarPorNombre(lista, nombre) {
  const indice = lista.findIndex((alumno) => alumno.nombre === nombre);
  if (indice === -1) {
    return false;
  }
  lista.splice(indice, 1);
  return true;
}

// ---------- Funciones que NO cambian la lista ----------

function buscarPorNombre(lista, nombre) {
  return lista.find((alumno) => alumno.nombre === nombre);
}

function ordenarPorNota(lista) {
  return [...lista].sort((a, b) => b.nota - a.nota);
}

function ordenarPorNombre(lista) {
  return [...lista].sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));
}