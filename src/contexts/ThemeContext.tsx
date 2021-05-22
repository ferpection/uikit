import { createContext } from 'react'

import { PRIMARY_COLORSET, FULL_COLORSET, Color } from '../colors'

type Partial<Type, ExcludedType> = {
  [Key in keyof Type]?: Type[Key] extends ExcludedType ? Type[Key] : Partial<Type[Key], ExcludedType>
}

export type Theme = {
  colors: {
    action: Color
    positive: Color
    negative: Color
    actionLight: Color
    positiveLight: Color
    negativeLight: Color
  }
}

export type ThemeValues = Color | string | number | boolean | Array<any>

export type ThemeInput = Partial<Theme, ThemeValues>

export const defaultThemeMutator: (value: ThemeInput) => void = () => {}
export const defaultTheme: Theme = {
  colors: {
    action: PRIMARY_COLORSET.ROBINS_EGG_BLUE,
    positive: PRIMARY_COLORSET.SHAMROCK,
    negative: PRIMARY_COLORSET.SUNGLOW,
    actionLight: FULL_COLORSET.BLACK_SQUEEZE,
    positiveLight: FULL_COLORSET.WHITE_ICE,
    negativeLight: FULL_COLORSET.FLORAL_WHITE,
  },
}

export const ThemeContext = createContext(defaultTheme)
export const ThemeMutationContext = createContext(defaultThemeMutator)
