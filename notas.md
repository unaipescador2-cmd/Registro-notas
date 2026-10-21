# Notas · Registro de notas

## Fase 1 · Explorar los arrays

### Tabla de predicciones

**Bloque A · Posiciones** (`const a = ["x", "y", "z"]`)

| Línea | Mi predicción | Lo que salió |
|-------|---------------|--------------|
| 1. `a[0]` | ESCRIBE AQUÍ TU PREDICCIÓN | "x" |
| 2. `a[3]` | ESCRIBE AQUÍ TU PREDICCIÓN | undefined |
| 3. `a.length` | ESCRIBE AQUÍ TU PREDICCIÓN | 3 |
| 4. `[1, "dos", true].length` | ESCRIBE AQUÍ TU PREDICCIÓN | 3 |

**Bloque B · const y copias**

| Línea | Mi predicción | Lo que salió |
|-------|---------------|--------------|
| 5. `const c = [1]; c.push(2); c` | ESCRIBE AQUÍ TU PREDICCIÓN | [1, 2] |
| 6. `q.push(4)` y mirar `p` (con `let p = [1, 2, 3]; let q = p;`) | ESCRIBE AQUÍ TU PREDICCIÓN | `q.push(4)` devuelve 4. `p` queda [1, 2, 3, 4] |
| 7. `let r = [...p]; r.push(5)` y mirar `p` | ESCRIBE AQUÍ TU PREDICCIÓN | `r.push(5)` devuelve 5. `r` es [1, 2, 3, 4, 5] y `p` sigue en [1, 2, 3, 4] |

**Bloque C · Ordenar**

| Línea | Mi predicción | Lo que salió |
|-------|---------------|--------------|
| 8. `[10, 9, 1].sort()` | ESCRIBE AQUÍ TU PREDICCIÓN | [1, 10, 9] |
| 9. `[10, 9, 1].sort((x, y) => x - y)` | ESCRIBE AQUÍ TU PREDICCIÓN | [1, 9, 10] |

**Bloque D · ¿Cambia el array original?** (con `const n = [3, 1, 2]` en cada línea)

| Línea | Mi predicción | Lo que salió |
|-------|---------------|--------------|
| 10. `n.push(4)` | ESCRIBE AQUÍ TU PREDICCIÓN | Devuelve 4. `n` cambia: [3, 1, 2, 4] |
| 11. `n.pop()` | ESCRIBE AQUÍ TU PREDICCIÓN | Devuelve 2. `n` cambia: [3, 1] |
| 12. `n.slice(0, 2)` | ESCRIBE AQUÍ TU PREDICCIÓN | Devuelve [3, 1]. `n` no cambia: [3, 1, 2] |
| 13. `n.map(x => x * 2)` | ESCRIBE AQUÍ TU PREDICCIÓN | Devuelve [6, 2, 4]. `n` no cambia: [3, 1, 2] |

### Preguntas

1. **¿Qué da `a[3]` si el array solo tiene 3 elementos? ¿Por qué?**
   Da `undefined`. Las posiciones empiezan en 0, así que un array de 3 elementos tiene las posiciones 0, 1 y 2. La posición 3 no existe, y JavaScript no da error: devuelve `undefined`.

2. **¿Por qué `q.push(4)` cambió `p` y `r.push(5)` no? Explica qué es copiar y qué es referenciar.**
   Con `let q = p` no se crea otro array: `q` y `p` son dos nombres que apuntan al **mismo** array. Eso es referenciar, y por eso un cambio hecho desde `q` se ve también en `p`. Con `let r = [...p]` se crea un array **nuevo** con los mismos valores. Eso es copiar, y por eso `r.push(5)` solo cambia `r`.

3. **¿Por qué `[10, 9, 1].sort()` no dio `[1, 9, 10]`?**
   Porque `sort()` sin función de comparación convierte los números en texto y los ordena como palabras, letra a letra. Como `"1"` va antes que `"10"` y `"10"` antes que `"9"`, el resultado es `[1, 10, 9]`.

4. **De los cuatro métodos del bloque D, ¿cuáles cambian el array y cuáles devuelven uno nuevo?**
   `push` y `pop` **cambian** el array original. `slice` y `map` **devuelven un array nuevo** y dejan el original como estaba.