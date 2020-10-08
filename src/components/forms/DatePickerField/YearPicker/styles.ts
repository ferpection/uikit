import { css } from '@emotion/core'
import { C200_COLOR, C300_COLOR, N500_COLOR, N75_COLOR, R400_COLOR, R500_COLOR } from '../../../../colors'

const buttonWidth = 105

export const buttonBar = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const header = css`
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5px;
`

export const calendarBoard = css`
  display: flex;
  flex-wrap: wrap;
`

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
  outline: none;
  &:hover {
    background-color: ${`${N75_COLOR}`};
    color: ${`${N500_COLOR}`};
  }
`

export const calendarButtonsSelected = css`
  background-color: ${`${C200_COLOR}`};
  color: white;
  &:hover {
    background-color: ${`${C300_COLOR}`};
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
