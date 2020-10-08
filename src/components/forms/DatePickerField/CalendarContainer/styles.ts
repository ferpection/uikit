import { css } from '@emotion/core'

import { N100_COLOR, C200_COLOR } from '../../../../colors'
import { SANSSERIF_FONTSET } from '../../../../fonts'

const buttonWidth = 40

export const calendarContainer = css`
  position: absolute;
  top: 56px;
  left: 0;
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
