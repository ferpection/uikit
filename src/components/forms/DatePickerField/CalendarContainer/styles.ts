import { css } from '@emotion/core'

import { N100_COLOR, C200_COLOR } from '../../../../colors'
import { SANSSERIF_FONTSET } from '../../../../fonts'

const buttonWidth = 40

export const calendarContainer = css`
  position: absolute;
  top: 56px;
  left: 0;
  display: inline-flex;
  box-sizing: content-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${`${N100_COLOR}`};
  border-radius: 3px;
  padding: 20px;
  font-family: ${SANSSERIF_FONTSET.toString()};
  width: ${(buttonWidth + 10) * 7}px;
  background-color: white;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0 0 0 8px ${C200_COLOR.toRGBA(0.1)};
  }
  z-index: 1;
`

export const smallCalendarContainer = css`
  ${calendarContainer};
  top: 36px;
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
