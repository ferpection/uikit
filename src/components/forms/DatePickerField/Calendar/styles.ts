import { css } from '@emotion/react'
import { N500_COLOR } from '../../../../colors'

const buttonWidth = 40

export const calendarBoard = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const headerWeekday = css`
  font-weight: 600;
  flex-direction: row;
  justify-content: center;
  margin: 5px;
  appearance: none;
  box-sizing: border-box;
  color: ${`${N500_COLOR}`};
  border-radius: 50%;
  width: ${buttonWidth}px;
  border-color: transparent;
  outline: none;
  display: inline-flex;
  height: initial;
  background-color: transparent;

  &:hover,
  &:focus {
    background-color: transparent;
    color: ${`${N500_COLOR}`};
  }

  @media (max-width: 400px) {
    font-size: 0.8em;
    width: ${buttonWidth / 1.3}px;
  }
`

export const emptyButtonSpace = css`
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

  &:hover,
  &:focus {
    background-color: transparent;
    color: ${`${N500_COLOR}`};
  }
`
