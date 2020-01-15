import React, { FC } from 'react'

import { PRIMARY_COLORSET, Color } from '../../colors'

type Theme = {
  colors: {
    action: Color
    positive: Color
    negative: Color
  }
}

const defaultTheme: Theme = {
  colors: {
    action: PRIMARY_COLORSET.ROBINS_EGG_BLUE,
    positive: PRIMARY_COLORSET.SHAMROCK,
    negative: PRIMARY_COLORSET.SUNGLOW,
  },
}

export const ThemeContext = React.createContext(defaultTheme)

export const ThemeProvider: FC<ThemeProviderProps> = props => {
  const { children, theme } = props
  const value: Theme = {
    ...defaultTheme,
    ...theme,
    colors: {
      ...defaultTheme.colors,
      ...theme.colors,
    },
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export interface ThemeProviderProps {
  theme: Theme
}
