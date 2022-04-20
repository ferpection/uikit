import { FC, PropsWithChildren } from 'react'
import { Global, css } from '@emotion/react'

export interface GlobalCSSResetProps {
  fontNames?: string[]
  onlyLoadFonts?: boolean
}

export function GlobalCSSReset(props: PropsWithChildren<GlobalCSSResetProps>) {
  return (
    <Global
      styles={css`
        * {
        }
      `}
    />
  )
}
