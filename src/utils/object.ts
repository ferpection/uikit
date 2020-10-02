export function deepEqual(x: any, y: any): boolean {
  if (x == null || y == null) {
    return x === y
  }

  if (typeof x !== 'object' || typeof y !== 'object') {
    return x === y
  }

  if (Object.keys(x).length !== Object.keys(y).length) {
    return false
  }

  return Object.keys(x).every(key => deepEqual(x[key], y[key]))
}
