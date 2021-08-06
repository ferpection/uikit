interface Options {
  placeholderPattern?: string[]
  placeholder?: string
}

export function generatePlaceholders(values: any[], { placeholderPattern, placeholder }: Options = {}): string[] {
  if (Array.isArray(placeholderPattern) && placeholderPattern.length > 0) {
    return Object.keys(values).map(el => placeholderPattern[Number(el) % placeholderPattern.length])
  }

  return Object.keys(values).map(() => placeholder || '')
}
