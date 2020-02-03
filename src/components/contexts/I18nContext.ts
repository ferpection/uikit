import { createContext } from 'react'

type I18nUtils = {
  t: (key: string, variables?: { [errorKey: string]: any }) => string
  addTranslations: (language: string, translations: { [key: string]: string }) => void
}

export const I18nContext = createContext<I18nUtils>({
  t: (key: string) => key,
  addTranslations: () => {},
})
