import { css } from '@emotion/core'

import { SANSSERIF_FONTSET } from '../../../fonts'
import { C200_COLOR, C100_COLOR, C500_COLOR } from '../../../colors'

export const defaultButtonStyles = css`
  display: inline-block;
  margin: 3px 10px;
  padding: 10px 20px;
  color: ${`${C200_COLOR.toRGBA(0.7)}`};
  font-family: ${`${SANSSERIF_FONTSET}`};
  text-decoration: none;
  font-weight: 400;
  font-size: 0.9em;
  border-radius: 3px;
  transition: background-color .3s ease-in-out;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
`

export const activeButtonStyles = css`
  background-color: ${`${C100_COLOR.toRGBA(0.2)}`};
  color: ${`${C500_COLOR.toRGBA()}`};
`
