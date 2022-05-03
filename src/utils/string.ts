export function generateRandomString({ length = 0, prefix = '', start = '' }): string {
  if (start.length <= length) {
    const suffix = Math.random().toString(36).slice(2)
    return generateRandomString({ length, prefix, start: `${start}${suffix}` })
  }

  return `${prefix}${start.slice(0, length)}`
}
