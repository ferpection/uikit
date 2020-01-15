/** @jsx jsx */
import { FC, useEffect } from 'react'
import { jsx, Global, css } from '@emotion/core'
import WebFontLoader from 'webfontloader'

import { SANSSERIF_FONTSET, OPENSANS_FONT } from '../../fonts'

export const FontsLoader: FC<FontsLoaderProps> = ({ fontNames = [OPENSANS_FONT] }) => {
  useEffect(() => {
    WebFontLoader.load({
      google: {
        families: fontNames,
      },
    })
  }, [fontNames])

  return (
    <Global
      styles={css`
        body, html {
          font-family: ${`${SANSSERIF_FONTSET}`};
          font-weight: normal;
        }
      `}
    />
  )
}

export interface FontsLoaderProps {
  fontNames?: string[]
}
