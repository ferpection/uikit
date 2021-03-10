import React, { FC } from 'react'

import { ThemeProvider, ThemeProviderProps } from '../contexts/ThemeContext'

import { FontsLoader } from './FontsLoader'
import { GlobalCSSReset } from './GlobalCSSReset'

export interface UiKitInitializerProps {
  theme?: ThemeProviderProps['theme']
}

export const UiKitInitializer: FC<UiKitInitializerProps> = props => {
  return (
    <ThemeProvider theme={props.theme}>
      <GlobalCSSReset />
      <FontsLoader />
      {props.children}
    </ThemeProvider>
  )
}
