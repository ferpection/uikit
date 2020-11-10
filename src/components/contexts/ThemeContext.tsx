import React, { FC, useContext } from 'react'

import { PRIMARY_COLORSET, Color } from '../../colors'

type Partial<Type, ExcludedType> = {
  [Key in keyof Type]?: Type[Key] extends ExcludedType ? Type[Key] : Partial<Type[Key], ExcludedType>
}

type Theme = {
  colors: {
    action: Color
    positive: Color
    negative: Color
  }
}

type ThemeValues = Color | string | number | boolean | Array<any>

type ThemeInput = Partial<Theme, ThemeValues>

const defaultTheme: Theme = {
  colors: {
    action: PRIMARY_COLORSET.ROBINS_EGG_BLUE,
    positive: PRIMARY_COLORSET.SHAMROCK,
    negative: PRIMARY_COLORSET.SUNGLOW,
  },
}

export const ThemeContext = React.createContext(defaultTheme)

export interface ThemeProviderProps {
  theme?: ThemeInput
}

export const ThemeProvider: FC<ThemeProviderProps> = props => {
  const { children, theme = {} } = props
  const value: Theme = {
    ...defaultTheme,
    ...theme,
    colors: {
      ...defaultTheme.colors,
      ...theme.colors,
    },
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
