import { css } from '@emotion/react'

import { C100_COLOR, C200_COLOR, N300_COLOR, N75_COLOR } from '../../..'

export const baseStyles = css`
  display: flex;
  margin: 5px;
`

export const itemStyles = ({ selected = false, quantity = 10 }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% / ${quantity});
  min-width: min-content;
  padding: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: ${selected ? C200_COLOR.toRGB() : N75_COLOR.toRGB()};
  color: ${selected ? C200_COLOR.toRGB() : N300_COLOR.toRGB()};
  cursor: pointer;

  &:first-of-type {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-right-width: 0;
  }

  & + & {
    border-right-width: 0;
  }

  &:last-of-type {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-right-width: 1px;
  }

  &:hover {
    border-color: ${C100_COLOR.toRGB()};
    border-right-width: 1px;
  }

  &:hover + & {
    border-left-width: 0;
  }
`
