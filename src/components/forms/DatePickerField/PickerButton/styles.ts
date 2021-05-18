import { css } from '@emotion/react'
import { N500_COLOR, N75_COLOR, R400_COLOR, R500_COLOR } from '../../../../colors'
import { Theme } from '../../../contexts/ThemeContext'

const buttonWidth = 105

export const calendarButtons = css`
  display: inline-block;
  appearance: none;
  box-sizing: border-box;
  margin: 5px;
  color: ${`${N500_COLOR}`};
  border-radius: 3px;
  height: ${buttonWidth / 2}px;
  width: ${buttonWidth}px;
  background-color: transparent;
  border-color: transparent;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: ${`${N75_COLOR}`};
    color: ${`${N500_COLOR}`};
  }
`

export const calendarButtonsSelected = (theme: Theme) => css`
  background-color: ${`${theme.colors.action}`};
  color: white;
  &:hover {
    background-color: ${`${theme.colors.action.shade(-30)}`};
    color: white;
  }
`

export const calendarButtonsToday = css`
  background-color: ${`${R400_COLOR}`};
  color: white;
  &:hover {
    background-color: ${`${R500_COLOR}`};
    color: white;
  }
`
