interface Options {
  isOrdered?: boolean
  markerPattern?: string[]
}

export function generateMarkers(values: any[], { isOrdered = false, markerPattern = [] }: Options = {}): string[] {
  if (Array.isArray(markerPattern) && markerPattern.length > 0) {
    return Object.keys(values).map(el => markerPattern[Number(el) % markerPattern.length])
  }

  if (isOrdered) {
    return Object.keys(values).map(el => `${Number(el) + 1}.`)
  }

  return []
}
