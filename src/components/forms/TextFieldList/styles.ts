import { css } from '@emotion/react'

import { SANSSERIF_FONTSET } from '../../../fonts'
import { N300_COLOR } from '../../../colors'

export const list = css`
  padding-left: 20px;
  margin: 0;
  font-family: ${`${SANSSERIF_FONTSET}`};
  font-size: 15px;
  color: ${`${N300_COLOR}`};
`

export const listItem = css`
  position: relative;
  margin-top: 10px;
  &::marker {
    vertical-align: middle;
    content: attr(data-list-marker) ' ';
  }
`

export const textFieldAdjustments = css`
  margin: 0;
`

export const icon = css`
  position: absolute;
  left: -25px;
  top: 8px;
  background-color: white /* to hide the number */;
  &[disabled] {
    opacity: 1;
  }
`

export const hideMarker = css`
  list-style: none;
`

export const hideAndShowIconOnHover = css`
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
  li:hover &,
  li:focus-within & {
    opacity: 1;
  }
  li:hover,
  li:focus-within {
    list-style: none;
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
