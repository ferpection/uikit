import React from 'react'

import { PRIMARY_COLORSET } from '../../colors'

export const ThemeContext = React.createContext({
  colors: {
    action: PRIMARY_COLORSET.ROBINS_EGG_BLUE,
    positive: PRIMARY_COLORSET.SHAMROCK,
    negative: PRIMARY_COLORSET.SUNGLOW,
  },
})

export const ThemeProvider = ThemeContext.Provider
