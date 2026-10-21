# Notas · Registro de notas

## Fase 1 · Explorar los arrays

### Tabla de predicciones

**Bloque A · Posiciones** (`const a = ["x", "y", "z"]`)

| Línea | Mi predicción | Lo que salió |
|-------|---------------|--------------|
| 1. `a[0]` | SAldra lo que hay en la posicion 0 del array a  | "x" |
| 2. `a[3]` | Saldra lo que hay en la posicion 3 del array a | undefined |
| 3. `a.length` | Indica la longitud del array | 3 |
| 4. `[1, "dos", true].length` | Da la longitud del array | 3 |

**Bloque B · const y copias**

| Línea | Mi predicción | Lo que salió |
|-------|---------------|--------------|
| 5. `const c = [1]; c.push(2); c` | Añadira el 2 al array | [1, 2] |
| 6. `q.push(4)` y mirar `p` (con `let p = [1, 2, 3]; let q = p;`) | Añade al array el 4 | `q.push(4)` devuelve 4. `p` queda [1, 2, 3, 4] |
| 7. `let r = [...p]; r.push(5)` y mirar `p` | Añade 5 al array r | `r.push(5)` devuelve 5. `r` es [1, 2, 3, 4, 5] y `p` sigue en [1, 2, 3, 4] |

**Bloque C · Ordenar**

| Línea | Mi predicción | Lo que salió |
|-------|---------------|--------------|
| 8. `[10, 9, 1].sort()` | Pone el mas corto el primero | [1, 10, 9] |
| 9. `[10, 9, 1].sort((x, y) => x - y)` | hace la resta de x - y ypone el mas corto el primero | [1, 9, 10] |

**Bloque D · ¿Cambia el array original?** (con `const n = [3, 1, 2]` en cada línea)

| Línea | Mi predicción | Lo que salió |
|-------|---------------|--------------|
| 10. `n.push(4)` | Añade el numero 4 al array | Devuelve 4. `n` cambia: [3, 1, 2, 4] |
| 11. `n.pop()` | Quita el ultimo | Devuelve 2. `n` cambia: [3, 1] |
| 12. `n.slice(0, 2)` | mueve el 2 a la posicion 0 | Devuelve [3, 1]. `n` no cambia: [3, 1, 2] |
| 13. `n.map(x => x * 2)` | La psicion x la mltiplica por 2 | Devuelve [6, 2, 4]. `n` no cambia: [3, 1, 2] |

### Preguntas

1. **¿Qué da `a[3]` si el array solo tiene 3 elementos? ¿Por qué?**
   Da `undefined`. Las posiciones empiezan en 0, así que un array de 3 elementos tiene las posiciones 0, 1 y 2. La posición 3 no existe, y JavaScript no da error: devuelve `undefined`.

2. **¿Por qué `q.push(4)` cambió `p` y `r.push(5)` no? Explica qué es copiar y qué es referenciar.**
   Con `let q = p` no se crea otro array: `q` y `p` son dos nombres que apuntan al **mismo** array. Eso es referenciar, y por eso un cambio hecho desde `q` se ve también en `p`. Con `let r = [...p]` se crea un array **nuevo** con los mismos valores. Eso es copiar, y por eso `r.push(5)` solo cambia `r`.

3. **¿Por qué `[10, 9, 1].sort()` no dio `[1, 9, 10]`?**
   Porque `sort()` sin función de comparación convierte los números en texto y los ordena como palabras, letra a letra. Como `"1"` va antes que `"10"` y `"10"` antes que `"9"`, el resultado es `[1, 10, 9]`.

4. **De los cuatro métodos del bloque D, ¿cuáles cambian el array y cuáles devuelven uno nuevo?**
   `push` y `pop` **cambian** el array original. `slice` y `map` **devuelven un array nuevo** y dejan el original como estaba.

   ---
 
## Fase 2 · Añadir, quitar, buscar y ordenar
 
### Funciones creadas
 
Cada alumno es un objeto con su nombre y su nota, por ejemplo `{ nombre: "Ana", nota: 7.5 }`. La lista de los 10 alumnos está en la constante `ALUMNOS_INICIALES`.
 
| Función | Qué hace | Método usado | ¿Cambia la lista? |
|---------|----------|--------------|-------------------|
| `anadirAlumno(lista, nombre, nota)` | Añade un alumno al final y devuelve la nueva cantidad | `push` | **Cambia** |
| `quitarUltimo(lista)` | Quita el último alumno y lo devuelve | `pop` | **Cambia** |
| `insertarEn(lista, posicion, nombre, nota)` | Mete un alumno en una posición sin borrar a nadie | `splice` | **Cambia** |
| `borrarPorNombre(lista, nombre)` | Borra al alumno con ese nombre. Devuelve `true` o `false` | `findIndex` y `splice` | **Cambia** |
| `buscarPorNombre(lista, nombre)` | Devuelve el alumno con ese nombre, o `undefined` | `find` | No cambia |
| `ordenarPorNota(lista)` | Devuelve una copia ordenada de la nota más alta a la más baja | `[...lista]` y `sort` | No cambia |
| `ordenarPorNombre(lista)` | Devuelve una copia ordenada de la A a la Z | `[...lista]` y `sort` | No cambia |
 
### Ejemplos probados
 
| Ejemplo | Resultado |
|---------|-----------|
| `anadirAlumno(lista, "Eva", 8)` | 3 |
| `quitarUltimo(lista)` | { nombre: "Luis", nota: 4 } |
| `buscarPorNombre(lista, "Ana")` | { nombre: "Ana", nota: 7.5 } |
| `buscarPorNombre(lista, "Pepe")` | undefined |
| `insertarEn(lista, 1, "Eva", 8)` | La lista queda: Ana, Eva, Luis |
| `borrarPorNombre(lista, "Luis")` | true |
| `borrarPorNombre(lista, "Pepe")` | false |
| `ordenarPorNota(lista)` con Luis 4, Ana 7.5 y Lucía 10 | Lucía, Ana, Luis |
| `ordenarPorNombre(lista)` con Luis, Ana y Lucía | Ana, Lucía, Luis |
| `ordenarPorNota(ALUMNOS_INICIALES)` | Lucía (10), Marta (9.25), Hugo (9)... |
 
Al ordenar los 10 alumnos, Lucía (10) sale primera. La segunda es Marta (9.25) y Hugo (9) es tercero, porque 9.25 es más que 9.
 
### Preguntas
 
1. **¿Qué funciones de esta fase cambian la lista y cuáles no? ¿Cómo lo sé?**
   Cambian la lista `anadirAlumno`, `quitarUltimo`, `insertarEn` y `borrarPorNombre`. No la cambian `buscarPorNombre`, `ordenarPorNota` y `ordenarPorNombre`. Lo sé por el método que usan: `push`, `pop` y `splice` modifican el array original. `find` solo busca, y las dos de ordenar trabajan sobre una copia. Lo comprobé escribiendo la lista en la consola después de ejecutar cada función.
2. **¿Por qué `ordenarPorNota` hace una copia antes de ordenar?**
   Porque `sort` ordena el array **en el sitio**, es decir, cambia el original. Con `[...lista]` se crea una copia y `sort` ordena la copia, así que la lista original se queda como estaba.
3. **¿Qué pasaría con las notas 10, 9 y 1 si no usaras una función de comparación?**
   `sort` las convertiría en texto y las ordenaría como palabras, y saldría `[1, 10, 9]` en vez de `[10, 9, 1]`. Por eso hace falta la función de comparación `(a, b) => b.nota - a.nota`.


---
 
## Fase 3 · Estadísticas de la clase
 
Ninguna función de esta fase cambia la lista: todas calculan algo y lo devuelven.
 
### Funciones creadas
 
| Función | Qué devuelve | Método usado | Ejemplo | Resultado |
|---------|--------------|--------------|---------|-----------|
| `notaMedia(lista)` | La nota media sin redondear (0 si no hay alumnos) | `map` y `reduce` | `notaMedia(lista)` | 6.4375 |
| `notaMaxima(lista)` | La nota más alta (`null` si no hay alumnos) | `map` y `Math.max` | `notaMaxima(lista)` | 9.25 |
| `aprobados(lista)` | Los alumnos con 5 o más | `filter` | `aprobados(lista)` | Ana, Marta y Pablo |
| `nombresAprobados(lista)` | Solo los nombres de los aprobados (usa `aprobados`) | `filter` y `map` | `nombresAprobados(lista)` | ["Ana", "Marta", "Pablo"] |
| `hayAlgunDiez(lista)` | `true` si algún alumno tiene un 10 | `some` | `hayAlgunDiez(lista)` | false |
| `todosAprobados(lista)` | `true` si todos tienen 5 o más | `every` | `todosAprobados(lista)` | false |
| `ranking(lista, n)` | Los `n` mejores alumnos, de mayor a menor nota | `ordenarPorNota` y `slice` | `ranking(lista, 2)` | Marta (9.25) y Ana (7.5) |
 
La lista de ejemplo es Ana 7.5, Luis 4, Marta 9.25 y Pablo 5. `ranking` usa `ordenarPorNota` de la Fase 2, que ya trabaja sobre una copia, y por eso la lista original no cambia.
 
### Experimento 1: todas las funciones con una lista vacía
 
| Función | Resultado con `[]` |
|---------|--------------------|
| `notaMedia([])` | 0 |
| `notaMaxima([])` | null |
| `aprobados([])` | [] |
| `nombresAprobados([])` | [] |
| `hayAlgunDiez([])` | false |
| `todosAprobados([])` | true |
| `ranking([], 3)` | [] |
 
### Experimento 2: quitar el valor inicial del `reduce`
 
Quité el `0` del `reduce` de `notaMedia` y la probé con la lista vacía. Salió este error:
 
```
TypeError: Reduce of empty array with no initial value
```
 
Después volví a poner el `0`.
 
### Preguntas
 
1. **¿Por qué `reduce` necesita un valor inicial cuando la lista está vacía?**
   Cuando no se le da valor inicial, `reduce` toma el primer elemento de la lista como punto de partida. Si la lista está vacía no hay primer elemento, y da un `TypeError`. Con el valor inicial `0`, `reduce` devuelve ese `0` y no falla.
2. **¿Qué devuelve `todosAprobados` con una lista vacía? ¿Te parece lógico? Explícalo.**
   Devuelve `true`. Es lógico en matemáticas: `every` pregunta si hay algún elemento que no cumpla la condición, y en una lista vacía no hay ninguno, así que "todos cumplen". Pero en una clase puede resultar raro decir que todos han aprobado cuando no hay ningún alumno. Si fuera necesario, habría que comprobar antes que la lista no está vacía.
3. **¿Qué diferencia hay entre `map` y `filter`? Pon un ejemplo de tu código.**
   `map` transforma cada elemento y devuelve un array con **la misma cantidad** de elementos. `filter` se queda solo con los elementos que cumplen una condición y devuelve un array con **igual o menos** elementos, sin cambiarlos. En `nombresAprobados` se ven los dos: `filter` (dentro de `aprobados`) deja solo a los que tienen 5 o más, y `map` convierte cada alumno en su nombre.


---
## Fase 4 · Tabla dinámica con filtro y orden
 
### Funciones nuevas en `notas.js`
 
| Función | Qué hace | ¿Cambia la lista? |
|---------|----------|-------------------|
| `filtrarAlumnos(lista, filtro)` | Devuelve una copia con los alumnos de "todos", "aprobados" o "suspensos" (suspenso es menos de 5) | No cambia |
| `ordenarAlumnos(lista, criterio)` | Devuelve una copia ordenada por "nombre", "nota-desc" o "nota-asc". Usa las funciones de la Fase 2 | No cambia |
| `esNotaValida(texto)` | `true` si el texto es un número de 0 a 10. `false` si está vacío o no es un número | No cambia |
 
Ejemplos probados:
 
| Ejemplo | Resultado |
|---------|-----------|
| `esNotaValida("7.5")` | true |
| `esNotaValida("")` | false |
| `esNotaValida("11")` | false |
| `filtrarAlumnos(lista, "aprobados")` | Los que tienen 5 o más |
| `filtrarAlumnos(lista, "todos")` | Una copia de toda la lista |
| `ordenarAlumnos(lista, "nota-desc")` | De la nota más alta a la más baja |
| `ordenarAlumnos(lista, "nota-asc")` | De la nota más baja a la más alta |
 
### La página
 
- **`index.html`:** una tabla con las columnas Nombre, Nota y Borrar, un selector "Mostrar", un selector "Ordenar por", un formulario para añadir alumnos y un sitio para el resumen.
- **`pintarTabla()` en `app.js`:** es la única función que dibuja la tabla. Coge la lista, aplica el filtro y el orden y escribe las filas. Se llama al cargar la página y cada vez que algo cambia. Las notas aprobadas se ven en verde y las suspensas en rojo. Si no hay alumnos que mostrar, escribe un mensaje en la tabla.
- **Filtro y orden:** cuando se cambia uno de los dos selectores, se vuelve a dibujar la tabla.
- **Añadir:** antes de añadir comprueba que el nombre no está vacío, que no hay ya un alumno con ese nombre (con `buscarPorNombre`) y que la nota es válida (con `esNotaValida`). Si algo falla, escribe un mensaje en la página, sin usar `alert`.
- **Borrar:** cada fila tiene un botón ✕ que llama a `borrarPorNombre` y vuelve a dibujar la tabla.
- **Resumen:** número de alumnos, nota media con 2 decimales, nota máxima y aprobados, con las funciones de la Fase 3. Se calcula con la lista completa, no con la que se ve filtrada.
La lista verdadera es el array `alumnos`, que se crea como una copia de `ALUMNOS_INICIALES`. El filtro y el orden solo cambian lo que se ve, nunca esa lista.
 
### Preguntas
 
1. **¿Por qué `filtrarAlumnos` y `ordenarAlumnos` devuelven copias?**
   Porque la lista verdadera, la que se queda guardada, no debe cambiar al mirarla de otra forma. Filtrar y ordenar solo sirven para decidir qué se ve en la tabla. Si devolvieran la lista original, cada cambio de selector modificaría los datos.
2. **¿Qué pasaría en la página si `ordenarAlumnos` cambiara la lista original?**
   La lista quedaría reordenada para siempre cada vez que se eligiera un orden, y se perdería el orden en que se añadieron los alumnos. Además, el resumen y el resto de funciones trabajarían con una lista que ya no es la que había. Por eso `ordenarAlumnos` ordena una copia.