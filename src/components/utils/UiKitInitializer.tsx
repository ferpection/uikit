import React, { FC } from 'react'

import { ThemeProvider, ThemeProviderProps } from '../contexts/ThemeContext'
import { I18nContext } from '../contexts/I18nContext'
import { FontsLoader } from './FontsLoader'

export const UiKitInitializer: FC<UiKitInitializerProps> = props => {
  const t = props.i18n?.t?.bind(props.i18n)
  const loadNamespaces = props.i18n?.loadNamespaces?.bind(props.i18n)
  const addResourceBundle = props.i18n?.addResourceBundle?.bind(props.i18n)

  loadNamespaces(['uikit'])

  return (
    <ThemeProvider theme={props.theme}>
      <FontsLoader />
      <I18nContext.Provider
        value={{
          t: t || ((key: string) => {
            console.log(`Trying to translate ${key}`)
            return key
          }),
          addTranslations: (language: string, translations: { [key: string]: string }) => addResourceBundle(language, 'uikit', translations, true, true),
        }}
      >
        {props.children}
      </I18nContext.Provider>
    </ThemeProvider>
  )
}

export interface UiKitInitializerProps {
  theme?: ThemeProviderProps['theme']
  i18n?: I18nDelegate
}

export interface I18nDelegate {
  t: (key: string) => string
  loadNamespaces: (ns: string[]) => any
  addResourceBundle: (
    lng: string,
    ns: string,
    resources: { [key: string]: string },
    deep: boolean,
    overwrite: boolean
  ) => any
}
