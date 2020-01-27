import React, { FC } from 'react'

import { FontsLoader } from '../utils/FontsLoader'
import { ThemeProvider, ThemeProviderProps } from '../contexts/ThemeContext'
import { I18nContext } from '../contexts/I18nContext'

export const UiKitInitializer: FC<UiKitInitializerProps> = props => {
  props.i18n?.loadNamespaces(['uikit'])

  return (
    <ThemeProvider theme={props.theme}>
      <FontsLoader />
      <I18nContext.Provider value={{
        t: props.i18n.t || ((key: string) => key),
        addTranslations: (language: string, translations: { [key: string]: string }) => {
          props.i18n?.addResourceBundle(language, 'uikit', translations, true, true)
        }
      }}>
        {props.children}
      </I18nContext.Provider>
    </ThemeProvider>
  )
}

export interface UiKitInitializerProps {
  theme?: ThemeProviderProps['theme']
  i18n?: {
    t: (key: string) => string
    loadNamespaces: (ns: string[]) => any
    addResourceBundle: (lng: string, ns: string, resources: { [key: string]: string }, deep: boolean, overwrite: boolean) => any
  }
}
