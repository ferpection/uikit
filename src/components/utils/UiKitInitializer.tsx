import { PropsWithChildren } from 'react'

import { ThemeProvider, ThemeProviderProps } from '../contexts/ThemeProvider'

import { FontsLoader } from './FontsLoader'
import { GlobalCSSReset } from './GlobalCSSReset'

export interface UiKitInitializerProps {
  theme?: ThemeProviderProps['theme']
}

export function UiKitInitializer(props: PropsWithChildren<UiKitInitializerProps>) {
  return (
    <ThemeProvider theme={props.theme}>
      <GlobalCSSReset />
      <FontsLoader />
      {props.children}
    </ThemeProvider>
  )
}
