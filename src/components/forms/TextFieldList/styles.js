import { css } from '@emotion/core'

import { SANSSERIF_FONTSET } from '../../../fonts'
import { N300_COLOR, C200_COLOR } from '../../../colors'

export const list = css`
  padding-left: 20px;
  font-family: ${`${SANSSERIF_FONTSET}`};
  font-size: 15px;
  color: ${`${N300_COLOR}`};
`

export const listItem = css`
  position: relative;
  margin-bottom: 10px;
`

export const icon = css`
  position: absolute;
  left: -25px;
  top: 5px;
  background-color: white /* to hide the number */;
  &[disabled] {
    opacity: 1;
    color: ${C200_COLOR.toRGBA(0.5)};
  }
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

export const listErrors = css`
  margin: 10px 20px;
`
