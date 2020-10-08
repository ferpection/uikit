/** @jsx jsx */
import { FC } from 'react'
import { jsx } from '@emotion/core'

import { smallCalendarContainer, calendarContainer } from './styles'

interface CalendarContainerProps {
  isSmall?: boolean
}

export const CalendarContainer: FC<CalendarContainerProps> = ({ isSmall, children }) => {
  return (
    <div css={[isSmall ? smallCalendarContainer : calendarContainer]}>
      {children}
    </div>
  )
}
