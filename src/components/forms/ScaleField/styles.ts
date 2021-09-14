import { css } from '@emotion/react'

import { N300_COLOR, N75_COLOR } from '../../..'
import { Theme } from '../../../contexts/ThemeContext'

export const baseStyles = css`
  display: flex;
  margin: 5px;
`

export const itemStyles = (theme: Theme, { selected = false, quantity = 10 }) => css`
  appareance: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% / ${quantity});
  min-width: min-content;
  padding: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: ${selected ? theme.colors.action.toRGBA(0.5) : N75_COLOR.toRGB()};
  color: ${selected ? theme.colors.action.toRGB() : N300_COLOR.toRGB()};
  background-color: ${selected ? theme.colors.action.toRGBA(0.1) : 'white'};
  cursor: pointer;

  &:first-of-type {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    border-right-width: 0;
  }

  button + & {
    border-right-width: ${selected ? '1px' : 0};
  }

  &:last-of-type {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-right-width: 1px;
  }

  &:hover {
    border-color: ${theme.colors.action.toRGBA(0.5)};
    border-right-width: 1px;
  }

  &:hover + button {
    border-left-width: 0;
  }
`
