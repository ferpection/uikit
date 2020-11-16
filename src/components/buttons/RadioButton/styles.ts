import { css } from '@emotion/core'

import { SANSSERIF_FONTSET } from '../../../fonts'
import { N200_COLOR, N300_COLOR, C200_COLOR, N75_COLOR, N100_COLOR, C15_COLOR, Color } from '../../../colors'

export const radioStyles = ({ color = C200_COLOR, lighterColor = C15_COLOR }: { color: Color, lighterColor: Color }) => css`
  appearance: none;
  position: absolute;
  left: 0;
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
    background-color: ${`${lighterColor}`};
    border-radius: 50%;
    transition: transform 0.2s ease-in-out;
  }
  svg {
    opacity: 0;
    color: white;
    position: absolute;
    top: 2.5px;
    left: 1px;
    transition: opacity 0.2s ease-in-out;
  }
  label:hover > & {
    border-color: ${`${color}`};
    &::before {
      transform: scale(2);
    }
  }
  label:active > &::before {
    transform: scale(3);
  }
  input[type='radio']:checked + & {
    border-color: ${`${color}`};
    background: 3px 3px no-repeat ${`${color}`};
    background-size: 13px;
    svg {
      opacity: 1;
    }
  }
  input[type='radio']:disabled + & {
    border-color: ${`${N100_COLOR}`};
    background-color: ${`${N75_COLOR}`};
    &::before {
      transform: scale(1);
    }
  }
`

export const radioStylesTopSticked = css`
  top: 2px;
`

export const radioStylesBottomSticked = css`
  bottom: 4px;
`

export const labelStyles = ({ color = C200_COLOR }) => css`
  position: relative;
  display: flex;
  align-items: center;
  padding-left: 32px;
  margin: 10px 20px;
  font-size: 15px;
  transition: color 0.2s ease-in-out;
  font-family: ${`${SANSSERIF_FONTSET}`};
  line-height: 1.5;
  z-index: 0;
  color: ${`${N300_COLOR}`};
  &:hover {
    color: ${`${color}`};
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

export const childrenStyles = css`
  position: relative;
  flex-grow: 1;
`
