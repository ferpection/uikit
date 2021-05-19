import { css } from '@emotion/react'

import { SANSSERIF_FONTSET } from '../../../fonts'
import { Theme } from '../../contexts/ThemeContext'

export const defaultButtonStyles = (theme: Theme) => css`
  display: inline-block;
  margin: 3px 10px;
  padding: 10px 20px;
  color: ${`${theme.colors.action.toRGBA(0.7)}`};
  font-family: ${`${SANSSERIF_FONTSET}`};
  text-decoration: none;
  font-weight: 400;
  font-size: 0.9em;
  border-radius: 3px;
  transition: background-color 0.3s ease-in-out;
  text-rendering: optimizeLegibility;
  -moz-osx-font-smoothing: grayscale;
`

export const activeButtonStyles = (theme: Theme) => css`
  background-color: ${`${theme.colors.action.shade(-70).toRGBA(0.05)}`};
  color: ${`${theme.colors.action.shade(-100)}`};
`
