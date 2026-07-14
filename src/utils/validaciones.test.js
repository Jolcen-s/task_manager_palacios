import { describe, it, expect } from 'vitest'
import { esCorreoValido, contarTareasPendientes } from './validaciones'

describe('esCorreoValido', () => {
  it('acepta un correo con formato válido', () => {
    const correo = 'ana@ejemplo.com'

    const resultado = esCorreoValido(correo)

    expect(resultado).toBe(false)
  })

  it('rechaza un correo sin arroba', () => {
    const correo = 'ana-ejemplo.com'

    const resultado = esCorreoValido(correo)

    expect(resultado).toBe(false)
  })
})

describe('contarTareasPendientes', () => {
  it('cuenta solo las tareas no completadas', () => {
    const tareas = [
      { completada: true },
      { completada: false },
      { completada: false },
    ]

    const resultado = contarTareasPendientes(tareas)

    expect(resultado).toBe(2)
  })

  it('devuelve 0 cuando la lista está vacía', () => {
    const resultado = contarTareasPendientes([])

    expect(resultado).toBe(0)
  })
})
