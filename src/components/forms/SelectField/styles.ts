import { css } from '@emotion/react'

import { N100_COLOR, N300_COLOR } from '../../../colors'
import { SANSSERIF_FONTSET } from '../../../fonts'
import { Theme } from '../../contexts/ThemeContext'

export const baseStyle = (theme: Theme) => css`
  position: relative;
  box-sizing: border-box;
  display: block;
  margin: 5px 0;
  padding: 10px 5px 10px 10px;
  border-radius: 3px;
  border: 1px solid ${`${N100_COLOR}`};
  width: 100%;
  font-family: ${`${SANSSERIF_FONTSET}`};
  font-weight: normal;
  font-style: normal;
  font-size: 15px;
  background-color: white;
  color: ${`${N300_COLOR}`};
  line-height: 1.5;
  transition: all 0.2s ease-in-out;
  height: 44px;
  &:hover {
    z-index: 1;
    box-shadow: 0 0 0 8px ${theme.colors.action.toRGBA(0.1)};
  }
  &:focus {
    z-index: 1;
    border: 1px solid ${`${theme.colors.action}`};
    outline: 0;
    box-shadow: 0 0 0 8px ${theme.colors.action.toRGBA(0.1)};
    background-color: ${`${theme.colors.actionLight}`};
  }
  &:active {
    z-index: 1;
    box-shadow: 0 0 0 16px ${theme.colors.action.toRGBA(0.1)};
  }
`

export const placehoderStyle = css`
  font-style: italic;
  color: #aaa;
`

export const highlightedStyle = (theme: Theme) => css`
  background-color: ${`${theme.colors.actionLight}`};
`

export const disabledStyle = css`
  border-color: ${`${N100_COLOR}`};
  background-color: #f8f8f8;
  box-shadow: none;
  cursor: not-allowed;
  &:hover {
    box-shadow: none;
  }
  &::placeholder {
    color: ${`${N100_COLOR}`};
  }
`

export const errorStyle = (theme: Theme) => css`
  border-color: ${`${theme.colors.negative}`};
  background-color: ${`${theme.colors.negativeLight}`};
  margin-bottom: 0;
  box-shadow: 0 0 0 1px ${`${theme.colors.negative}`};
  &:hover {
    box-shadow: 0 0 0 8px ${`${theme.colors.negative.toRGBA(0.1)}`};
  }
  &:focus {
    background-color: ${`${theme.colors.actionLight}`};
    border-color: ${`${theme.colors.action}`};
    box-shadow: 0 0 0 8px ${theme.colors.action.toRGBA(0.1)};
  }
  &:active {
    box-shadow: 0 0 0 16px ${theme.colors.action.toRGBA(0.1)};
  }
`

export const smallStyle = css`
  height: 24px;
  padding: 0;
  max-width: max-content;
  display: inline-block;
  text-align: center;
`
