import { FC } from 'react'
import { jsx, Global, css } from '@emotion/react'

export interface GlobalCSSResetProps {
  fontNames?: string[]
  onlyLoadFonts?: boolean
}

export const GlobalCSSReset: FC<GlobalCSSResetProps> = () => (
  <Global
    styles={css`
      * {
      }
    `}
  />
)
