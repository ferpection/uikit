/** @jsx jsx */
import { FC } from 'react'
import { jsx } from '@emotion/core'
import { RenderProps } from 'dayzed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { calendarContainer, buttonBar, header, calendarButtons, headerWeekday, calendarButtonsToday, calendarButtonsSelected, calendarBoard, emptyButtonSpace, smallCalendarContainer } from './styles'
import { Button } from '../../../buttons/Button/Button'

const monthNamesShort = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]
const weekdayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const Calendar: FC<CalendarProps> = ({ calendars, getBackProps, getDateProps, getForwardProps, isSmall }) => (
  <div css={[isSmall ? smallCalendarContainer : calendarContainer]}>
    <div css={[buttonBar]}>
      <Button isFilled icon="arrow-left" {...getBackProps({ calendars })}>Back</Button>
      <Button isFilled {...getForwardProps({ calendars })}>Next <FontAwesomeIcon size="sm" icon={{ prefix: 'fas', iconName: 'arrow-right' }} /></Button>
    </div>
    {calendars.map(calendar => (
      <div
        key={`${calendar.month}${calendar.year}`}
      >
        <div css={[header]}>
          {monthNamesShort[calendar.month]} {calendar.year}
        </div>
        {weekdayNamesShort.map(weekday => (
          <div
            key={`${calendar.month}${calendar.year}${weekday}`}
            css={[calendarButtons, headerWeekday]}
          >
            {weekday}
          </div>
        ))}
        <div css={calendarBoard}>
          {calendar.weeks.map((week, weekIndex) =>
            week.map((dateObj, index) => {
              const key = `${calendar.month}${calendar.year}${weekIndex}${index}`
              if (!dateObj) {
                return (
                  <div
                    css={[emptyButtonSpace]}
                    key={key}
                  />
                )
              }
              const { date, selected, selectable, today } = dateObj
              return (
                <button
                  key={key}
                  css={[
                    calendarButtons,
                    today ? calendarButtonsToday : null,
                    selected ? calendarButtonsSelected : null,
                  ]}
                  {...getDateProps({ dateObj })}
                >
                  {selectable ? date.getDate() : 'X'}
                </button>
              )
            }),
          )}
        </div>
      </div>
    ))}
  </div>
)

export interface CalendarProps extends RenderProps {
  isSmall?: boolean
}
