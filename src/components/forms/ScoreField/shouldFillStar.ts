export function shouldFillStar(
  currentChoice: number,
  choiceSelected: number,
  choiceOvered: number,
  { componentDisabled = false, alwaysShowSelected = false } = {},
): boolean {
  if (currentChoice > choiceSelected) return false

  if (currentChoice <= choiceOvered && !componentDisabled && !alwaysShowSelected) return false

  return true
}
