import { css } from '@emotion/core'

import { SANSSERIF_FONTSET } from '../../../fonts'
import { N200_COLOR, N300_COLOR, C200_COLOR, N75_COLOR, N100_COLOR, C15_COLOR } from '../../../colors'
import a from '../../iconography/icon-check-white.svg'

export const radioStyles = css`
  appearance: none;
  position: absolute;
  left: 0;
  top: 2px;
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  border: 1px solid ${`${N200_COLOR}`};
  transition: border-color 0.2s ease-in-out;
  &::before {
    content: '';
    position: relative;
    z-index: -1;
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${`${C15_COLOR}`};
    border-radius: 50%;
    transition: transform 0.2s ease-in-out;
  }
  label:hover > & {
    border-color: #00aab7;
    &::before {
      transform: scale(2);
    }
  }
  label:active > &::before {
    transform: scale(3);
  }
  input[type='radio']:checked + & {
    border-color: ${`${C200_COLOR}`};
    background: url(${a}) 3px 3px no-repeat ${`${C200_COLOR}`};
    background-size: 12px;
  }
  input[type='radio']:disabled + & {
    border-color: ${`${N100_COLOR}`};
    background-color: ${`${N75_COLOR}`};
    &::before {
      transform: scale(1);
    }
  }
`

export const labelStyles = css`
  position: relative;
  display: block;
  padding-left: 32px;
  margin: 20px;
  font-size: 15px;
  transition: color 0.2s ease-in-out;
  font-family: ${`${SANSSERIF_FONTSET}`};
  line-height: 1.5;
  color: ${`${N300_COLOR}`};
  &:hover {
    color: #00aab7;
    cursor: pointer;
  }
`

export const labelStylesDisabled = css`
  color: ${`${N200_COLOR}`};
  &:hover {
    cursor: not-allowed;
    color: ${`${N200_COLOR}`};
  }
`

export const inputStyles = css`
  display: none;
`
