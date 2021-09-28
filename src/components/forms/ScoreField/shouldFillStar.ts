export function shouldFillStar(
  currentChoice: number,
  choiceSelected: number,
  choiceOvered: number,
  { componentDisabled = false, alwaysShowSelected = false } = {},
): boolean {
  return (
    (currentChoice <= choiceSelected && (currentChoice > choiceOvered || componentDisabled)) ||
    (currentChoice === choiceSelected && alwaysShowSelected)
  )
}
