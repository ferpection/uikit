/** @jsx jsx */
import React, { FC } from 'react'
import { jsx, Global, css } from '@emotion/core'

import { SANSSERIF_FONTSET } from '../../fonts'

export const FontsLoader: FC<FontsLoaderProps> = props => {
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

export interface FontsLoaderProps {}
