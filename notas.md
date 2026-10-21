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