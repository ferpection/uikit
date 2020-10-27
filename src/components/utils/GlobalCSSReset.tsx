/** @jsx jsx */
import { FC } from 'react'
import { jsx, Global, css } from '@emotion/core'

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
