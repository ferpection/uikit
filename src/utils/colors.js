import { min, max } from './number.js'

export function colorShades(color, rates = 0) {
  if (color == null) return null

  const [hash, ...colorArray] = color

  if (hash !== '#' || colorArray.length !== 6) return null

  const colorNumber = parseInt(colorArray.join(''), 16)

  let redComponent = (colorNumber >> 16) + rates
  let greenComponent = (colorNumber & 0x0000ff) + rates
  let blueComponent = ((colorNumber >> 8) & 0x00ff) + rates

  redComponent = min(max(redComponent, 255), 0)
  greenComponent = min(max(greenComponent, 255), 0)
  blueComponent = min(max(blueComponent, 255), 0)

  const ajustedColorNumber =
    greenComponent | (blueComponent << 8) | (redComponent << 16)
  const ajustedColorString = ajustedColorNumber.toString(16).padStart(6, 0)

  return `#${ajustedColorString}`
}
