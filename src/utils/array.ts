export function removeDuplicate<T>(array: Array<T>) {
  // We also tried:
  // Array.from(new Set(array))
  // Performance tests were better for the .filter() version
  return array.filter((value, index) => array.indexOf(value) === index)
}

export function removeConsecutiveDuplicate<T>(array: Array<T>) {
  return array.reduce<T[]>((newArray, value, index, oldArray) => {
    if (value === oldArray[index - 1]) {
      return newArray
    }

    return [...newArray, value]
  }, [])
}
