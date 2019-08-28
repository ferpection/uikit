import { css } from '@emotion/core'

import { SANSSERIF_FONTSET } from '../../../fonts'
import { N300_COLOR } from '../../../colors'

export const list = css`
  padding-left: 20px;
  font-family: ${`${SANSSERIF_FONTSET}`};
  font-size: 15px;
  color: ${`${N300_COLOR}`};
`

export const listItem = css`
  position: relative;
`

export const icon = css`
  position: absolute;
  left: -25px;
  top: 5px;
  background-color: white /* to hide the number */;
`

export const hideAndShowIconOnHover = css`
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  li:hover & {
    opacity: 1;
  }
`

export const addButton = css`
  position: relative;
  width: 100%;
  text-align: inherit;
`
