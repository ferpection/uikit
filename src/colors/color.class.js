import { min, max } from '../utils/number'

export class Color {
  static fromHex(hexColor) {
    if (hexColor == null) return null

    const [hash, ...colorArray] = hexColor

    if (hash !== '#' || colorArray.length !== 6) return null

    const colorNumber = parseInt(colorArray.join(''), 16)

    return new Color(
      colorNumber >> 16,
      colorNumber & 0x0000ff,
      (colorNumber >> 8) & 0x00ff
    )
  }

  get [Symbol.toStringTag]() {
    return `Color(r: ${this.red}, g: ${this.green}, b: ${this.blue}, a: ${this.alfa})`
  }

  constructor(r, g, b, a = 1) {
    this.red = min(max(r, 255), 0)
    this.green = min(max(g, 255), 0)
    this.blue = min(max(b, 255), 0)
    this.alfa = min(max(a, 1), 0)
  }

  hex() {
    return `#${this.red.toString(16)}${this.green.toString(16)}${this.blue.toString(16)}`
  }

  rgb() {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`
  }

  rgba(alfa = this.alfa) {
    return `rgb(${this.red}, ${this.green}, ${this.blue}, ${alfa})`
  }

  shade(rate = 0) {
    return new Color(
      this.red + rate,
      this.green + rate,
      this.blue + rate,
    )
  }

  toString() {
    if (this.alfa === 1) {
      return this.rgb()
    }

    return this.rgba()
  }
}
