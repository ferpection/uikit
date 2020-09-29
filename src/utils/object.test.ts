import { expect, test, describe } from '@jest/globals'

import { deepEqual } from './object'

describe('deepEqual', () => {
  test('one arg null should return false', () => {
    expect(deepEqual('a', null)).toBe(false)
    expect(deepEqual(null, 'b')).toBe(false)
  })

  test('both args null should return true', () => {
    expect(deepEqual(null, null)).toBe(true)
  })

  test('one arg undefined should return false', () => {
    expect(deepEqual('a', undefined)).toBe(false)
    expect(deepEqual(undefined, 'a')).toBe(false)
  })

  test('both args undefined should return true', () => {
    expect(deepEqual(undefined, undefined)).toBe(true)
  })

  test('different strings should return false', () => {
    expect(deepEqual('a', 'b')).toBe(false)
  })

  test('same strings should return true', () => {
    expect(deepEqual('b', 'b')).toBe(true)
  })

  test('different numbers should return false', () => {
    expect(deepEqual(1, 2)).toBe(false)
  })

  test('same numbers should return true', () => {
    expect(deepEqual(1, 1)).toBe(true)
  })

  test('objects with different number of keys should return false', () => {
    expect(deepEqual({ a: 1 }, { a: 1, b: 1 })).toBe(false)
    expect(deepEqual({ a: 1, b: 1 }, { a: 1 })).toBe(false)
  })

  test('objects with same number of keys should return true', () => {
    expect(deepEqual({ a: 1 }, { a: 1 })).toBe(true)
  })

  test('objects with different keys should return false', () => {
    expect(deepEqual({ a: 1 }, { b: 1 })).toBe(false)
  })

  test('objects with same keys should return true', () => {
    expect(deepEqual({ a: 1 }, { a: 1 })).toBe(true)
  })

  test('objects with different values should return false', () => {
    expect(deepEqual({ a: 1 }, { a: 2 })).toBe(false)
  })

  test('objects with same values should return true', () => {
    expect(deepEqual({ a: 1 }, { a: 1 })).toBe(true)
  })

  test('subobjects with different values should return false', () => {
    expect(deepEqual({ a: 1, b: { a: 1 } }, { a: 1, b: { a: 2 } })).toBe(false)
  })

  test('subobjects with same values should return true', () => {
    expect(deepEqual({ a: 1, b: { a: 1 } }, { a: 1, b: { a: 1 } })).toBe(true)
  })
})
