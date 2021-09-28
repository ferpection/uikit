export function shouldColorStar(
  currentChoice: number,
  selectedChoice: number,
  overedChoice: number,
  { componentDisabled = false } = {},
): boolean {
  return (
    (currentChoice <= overedChoice && overedChoice > -1 && !componentDisabled) ||
    (currentChoice <= selectedChoice && (overedChoice === -1 || componentDisabled))
  )
}
