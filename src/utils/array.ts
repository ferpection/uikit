export function removeDuplicate<T>(array: Array<T>) {
  // We also tried:
  // Array.from(new Set(array))
  // Performance tests were better for the .filter() version
  return array.filter((value, index) => array.indexOf(value) === index)
}
