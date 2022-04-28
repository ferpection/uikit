import { useEffect, Fragment, PropsWithChildren } from 'react'
import { Global, css } from '@emotion/react'
import WebFontLoader from 'webfontloader'

import { SANSSERIF_FONTSET, OPENSANS_FONT } from '../../fonts'

export interface FontsLoaderProps {
  fontNames?: string[]
  onlyLoadFonts?: boolean
}

export function FontsLoader({
  fontNames = [OPENSANS_FONT],
  onlyLoadFonts = false,
}: PropsWithChildren<FontsLoaderProps>) {
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
