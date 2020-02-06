import { css } from '@emotion/core'
import { N100_COLOR, R500_COLOR, C200_COLOR, N75_COLOR, N500_COLOR, R400_COLOR, C300_COLOR } from '../../../colors'
import { SANSSERIF_FONTSET } from '../../../fonts'

const buttonWidth = 40

export const datePickerContainer = css`
  position: relative;
`

export const calendarContainer = css`
  position: absolute;
  top: 55px; left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${`${N100_COLOR}`};
  border-radius: 3px;
  padding: 20px;
  font-family: ${SANSSERIF_FONTSET.toString()};
  width: ${(buttonWidth + 10) * 7}px;
  background-color: white;
  transition: box-shadow .3s ease-in-out, background-color .3s ease-in-out, color .3s ease-in-out;
  &:hover {
    box-shadow: 0 1px 4px 1px rgba(0,0,0,0.3);
  }
`

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
  border-radius: 50%;
  height: ${buttonWidth}px;
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

export const headerWeekday = css`
  ${header};
  ${calendarButtons};
  display: inline-flex;
  height: initial;
  background-color: transparent;
  &:hover, &:focus {
    background-color: transparent;
  }
`

export const emptyButtonSpace = css`
  ${calendarButtons};
  &:hover, &:focus {
    background-color: transparent;
  }
`
