import { PropsWithChildren, useState } from 'react'

import { Theme, ThemeContext, defaultTheme, ThemeMutationContext, ThemeInput } from '../../contexts/ThemeContext'

export interface ThemeProviderProps {
  theme?: ThemeInput
}

function mergeTheme(theme: Theme, input: ThemeInput): Theme {
  return {
    ...theme,
    ...input,
    colors: {
      ...theme.colors,
      ...input.colors,
    },
  }
}

export function ThemeProvider(props: PropsWithChildren<ThemeProviderProps>) {
  const { theme: initialTheme = {}, ...moreProps } = props
  const [theme, setTheme] = useState(mergeTheme(defaultTheme, initialTheme))

  return (
    <ThemeMutationContext.Provider value={themeInput => setTheme(mergeTheme(theme, themeInput))}>
      <ThemeContext.Provider value={theme} {...moreProps} />
    </ThemeMutationContext.Provider>
  )
}
