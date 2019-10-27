import { css } from '@emotion/core'

import { SANSSERIF_FONTSET } from '../../../fonts'

export const radioStyles = css`
  appearance: none;
  position: absolute;
  left: 0;
  top: 2px;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  border: 1px solid #b0b0b0;
  transition: border-color .2s ease-in-out;
  &::before {
    content: '';
    position: relative;
    z-index: -1;
    display: block;
    width: 100%;
    height: 100%;
    background-color: #eff9f9;
    border-radius: 50%;
    transition: transform .2s ease-in-out;
  }
  label:hover > & {
    border-color: #00aab7;
    &::before {
      transform: scale(2);
    }
  }
  input[type="radio"]:checked + & {
    border-color: #00becd;
    background: url(img/icon-check-white.svg) 3px 3px no-repeat #00becd;
    background-size: 12px;
  }
`

export const labelStyles = css`
  position: relative;
  display: block;
  padding-left: 32px;
  margin: 20px;
  font-size: 15px;
  transition: color .2s ease-in-out;
  font-family: ${`${SANSSERIF_FONTSET}`};
  line-height: 1.5;
  &:hover {
    color: #00aab7;
    cursor: pointer;
  }
`

export const inputStyles = css`
  display: none;
`
