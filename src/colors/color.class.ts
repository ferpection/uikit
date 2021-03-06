import { min, max } from '../utils/number'

export class Color {
  static fromHex(hexColor: string) {
    if (hexColor == null) return null

    const [hash, ...colorArray] = Array.from(hexColor)

    if (hash !== '#' || colorArray.length !== 6) return null

    const colorNumber = parseInt(colorArray.join(''), 16)

    return new Color(colorNumber >> 16, (colorNumber >> 8) & 0x00ff, colorNumber & 0x0000ff)
  }

  private red: number
  private green: number
  private blue: number
  private alfa: number

  get [Symbol.toStringTag]() {
    return `Color(r: ${this.red}, g: ${this.green}, b: ${this.blue}, a: ${this.alfa})`
  }

  constructor(r: number, g: number, b: number, a = 1) {
    this.red = min(max(r, 255), 0)
    this.green = min(max(g, 255), 0)
    this.blue = min(max(b, 255), 0)
    this.alfa = min(max(a, 1), 0)
  }

  toHex() {
    const redComponent = this.red.toString(16).padStart(2, '0')
    const greenComponent = this.green.toString(16).padStart(2, '0')
    const blueComponent = this.blue.toString(16).padStart(2, '0')

    return `#${redComponent}${greenComponent}${blueComponent}`
  }

  toRGB() {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`
  }

  toRGBA(alfa = this.alfa) {
    return `rgba(${this.red}, ${this.green}, ${this.blue}, ${alfa})`
  }

  shade(rate = 0) {
    return new Color(this.red + rate, this.green + rate, this.blue + rate)
  }

  toString() {
    if (this.alfa === 1) {
      return this.toRGB()
    }

    return this.toRGBA()
  }
}
