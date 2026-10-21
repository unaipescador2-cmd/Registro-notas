// ============================================
// notas.js · Funciones del registro de notas
// No toca la página: solo recibe datos y devuelve resultados.
// ============================================

/**
 * Un alumno del registro.
 * @typedef {{nombre: string, nota: number}} Alumno
 */

/** Los 10 alumnos con los que empieza el registro. @type {Alumno[]} */
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

/**
 * Añade un alumno al final de la lista.
 * Cambia la lista: SÍ (usa push).
 * @param {Alumno[]} lista - Lista de alumnos.
 * @param {string} nombre - Nombre del alumno nuevo.
 * @param {number} nota - Nota del alumno nuevo.
 * @returns {number} La nueva cantidad de alumnos.
 */
function anadirAlumno(lista, nombre, nota) {
  return lista.push({ nombre, nota });
}

/**
 * Quita el último alumno de la lista.
 * Cambia la lista: SÍ (usa pop).
 * @param {Alumno[]} lista - Lista de alumnos.
 * @returns {Alumno|undefined} El alumno quitado, o undefined si la lista estaba vacía.
 */
function quitarUltimo(lista) {
  return lista.pop();
}

/**
 * Mete un alumno en una posición sin borrar a nadie.
 * Cambia la lista: SÍ (usa splice).
 * @param {Alumno[]} lista - Lista de alumnos.
 * @param {number} posicion - Posición donde se inserta.
 * @param {string} nombre - Nombre del alumno nuevo.
 * @param {number} nota - Nota del alumno nuevo.
 * @returns {void} No devuelve nada.
 */
function insertarEn(lista, posicion, nombre, nota) {
  lista.splice(posicion, 0, { nombre, nota });
}

/**
 * Borra al alumno que tenga ese nombre.
 * Cambia la lista: SÍ, si encuentra al alumno (usa splice).
 * @param {Alumno[]} lista - Lista de alumnos.
 * @param {string} nombre - Nombre del alumno a borrar.
 * @returns {boolean} true si ha borrado a alguien, false si no había nadie con ese nombre.
 */
function borrarPorNombre(lista, nombre) {
  const indice = lista.findIndex((alumno) => alumno.nombre === nombre);
  if (indice === -1) {
    return false;
  }
  lista.splice(indice, 1);
  return true;
}

// ---------- Funciones que NO cambian la lista ----------

/**
 * Busca un alumno por su nombre.
 * Cambia la lista: NO.
 * @param {Alumno[]} lista - Lista de alumnos.
 * @param {string} nombre - Nombre que se busca.
 * @returns {Alumno|undefined} El alumno, o undefined si no existe.
 */
function buscarPorNombre(lista, nombre) {
  return lista.find((alumno) => alumno.nombre === nombre);
}

/**
 * Ordena los alumnos de la nota más alta a la más baja.
 * Cambia la lista: NO (ordena una copia).
 * @param {Alumno[]} lista - Lista de alumnos.
 * @returns {Alumno[]} Una copia de la lista ordenada por nota, de mayor a menor.
 */
function ordenarPorNota(lista) {
  return [...lista].sort((a, b) => b.nota - a.nota);
}

/**
 * Ordena los alumnos por nombre, de la A a la Z.
 * Cambia la lista: NO (ordena una copia).
 * @param {Alumno[]} lista - Lista de alumnos.
 * @returns {Alumno[]} Una copia de la lista ordenada por nombre.
 */
function ordenarPorNombre(lista) {
  return [...lista].sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));
}

/**
 * Calcula la nota media de la clase, sin redondear.
 * Cambia la lista: NO.
 * @param {Alumno[]} lista - Lista de alumnos.
 * @returns {number} La nota media, o 0 si no hay alumnos.
 */
function notaMedia(lista) {
  const suma = lista
    .map((alumno) => alumno.nota)
    .reduce((total, nota) => total + nota, 0);
  return lista.length === 0 ? 0 : suma / lista.length;
}

/**
 * Busca la nota más alta de la clase.
 * Cambia la lista: NO.
 * @param {Alumno[]} lista - Lista de alumnos.
 * @returns {number|null} La nota más alta, o null si no hay alumnos.
 */
function notaMaxima(lista) {
  if (lista.length === 0) {
    return null;
  }
  return Math.max(...lista.map((alumno) => alumno.nota));
}

/**
 * Selecciona los alumnos con 5 o más.
 * Cambia la lista: NO (filter devuelve un array nuevo).
 * @param {Alumno[]} lista - Lista de alumnos.
 * @returns {Alumno[]} Un array nuevo con los alumnos aprobados.
 */
function aprobados(lista) {
  return lista.filter((alumno) => alumno.nota >= 5);
}

/**
 * Obtiene solo los nombres de los alumnos aprobados.
 * Cambia la lista: NO. Usa aprobados.
 * @param {Alumno[]} lista - Lista de alumnos.
 * @returns {string[]} Los nombres de los aprobados.
 */
function nombresAprobados(lista) {
  return aprobados(lista).map((alumno) => alumno.nombre);
}

/**
 * Comprueba si algún alumno tiene un 10.
 * Cambia la lista: NO.
 * @param {Alumno[]} lista - Lista de alumnos.
 * @returns {boolean} true si hay algún 10.
 */
function hayAlgunDiez(lista) {
  return lista.some((alumno) => alumno.nota === 10);
}

/**
 * Comprueba si todos los alumnos tienen 5 o más.
 * Cambia la lista: NO. Con una lista vacía devuelve true.
 * @param {Alumno[]} lista - Lista de alumnos.
 * @returns {boolean} true si todos han aprobado.
 */
function todosAprobados(lista) {
  return lista.every((alumno) => alumno.nota >= 5);
}

/**
 * Obtiene los n mejores alumnos.
 * Cambia la lista: NO (trabaja con una copia ordenada).
 * @param {Alumno[]} lista - Lista de alumnos.
 * @param {number} n - Cuántos alumnos se quieren.
 * @returns {Alumno[]} Los n alumnos con mejor nota, de mayor a menor.
 */
function ranking(lista, n) {
  return ordenarPorNota(lista).slice(0, n);
}

/**
 * Filtra los alumnos según su resultado. Suspenso es menos de 5.
 * Cambia la lista: NO (devuelve una copia).
 * @param {Alumno[]} lista - Lista de alumnos.
 * @param {string} filtro - "todos", "aprobados" o "suspensos".
 * @returns {Alumno[]} Un array nuevo con los alumnos que cumplen el filtro.
 */
function filtrarAlumnos(lista, filtro) {
  if (filtro === "aprobados") {
    return aprobados(lista);
  }
  if (filtro === "suspensos") {
    return lista.filter((alumno) => alumno.nota < 5);
  }
  return [...lista];
}

/**
 * Ordena los alumnos según un criterio. Usa ordenarPorNombre y ordenarPorNota.
 * Cambia la lista: NO (devuelve una copia).
 * @param {Alumno[]} lista - Lista de alumnos.
 * @param {string} criterio - "nombre", "nota-desc" o "nota-asc".
 * @returns {Alumno[]} Una copia de la lista ordenada.
 */
function ordenarAlumnos(lista, criterio) {
  if (criterio === "nombre") {
    return ordenarPorNombre(lista);
  }
  if (criterio === "nota-desc") {
    return ordenarPorNota(lista);
  }
  if (criterio === "nota-asc") {
    return ordenarPorNota(lista).reverse();
  }
  return [...lista];
}

/**
 * Comprueba si un texto es una nota válida, es decir, un número de 0 a 10.
 * Cambia la lista: NO (no recibe ninguna lista).
 * @param {string} texto - Texto escrito por el usuario.
 * @returns {boolean} true si es un número de 0 a 10; false si está vacío o no es un número.
 */
function esNotaValida(texto) {
  if (texto.trim() === "") {
    return false;
  }
  const numero = Number(texto);
  return Number.isFinite(numero) && numero >= 0 && numero <= 10;
}