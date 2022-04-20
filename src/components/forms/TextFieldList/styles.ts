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
  list-style: none;
  &::marker {
    display: none;
  }
  &::before {
    content: attr(data-list-marker) ' ';
    display: inline-flex;
    position: absolute;
    height: 40px;
    width: 25px;
    top: 0;
    left: -25px;
    align-items: center;
    justify-content: center;
  }
`

export const textFieldAdjustments = css`
  margin: 0;
`

export const icon = css`
  position: absolute;
  left: -25px;
  background-color: white /* to hide the number */;
  height: 40px;
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
