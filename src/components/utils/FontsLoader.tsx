/** @jsx jsx */
import { FC, useEffect, Fragment } from 'react'
import { jsx, Global, css } from '@emotion/core'
import WebFontLoader from 'webfontloader'

import { SANSSERIF_FONTSET, OPENSANS_FONT } from '../../fonts'

export interface FontsLoaderProps {
  fontNames?: string[]
  onlyLoadFonts?: boolean
}

export const FontsLoader: FC<FontsLoaderProps> = ({ fontNames = [OPENSANS_FONT], onlyLoadFonts = false }) => {
  useEffect(() => {
    WebFontLoader.load({
      google: {
        families: fontNames,
      },
    })
  }, [fontNames])

  return (
    <Fragment>
      {onlyLoadFonts || (
        <Global
          styles={css`
            body,
            html {
              font-family: ${`${SANSSERIF_FONTSET}`};
              font-weight: normal;
            }
          `}
        />
      )}
    </Fragment>
  )
}
