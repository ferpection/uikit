/** @jsx jsx */
import { FC, useState } from 'react'
import { jsx } from '@emotion/core'
import Dayzed from 'dayzed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { TextField } from '../TextField/TextField'
import { FormProps } from '../form-props'

import { calendarContainer, buttonBar, header, calendarButtons, headerWeekday, calendarButtonsToday, calendarButtonsSelected, calendarBoard, emptyButtonSpace, datePickerContainer } from './styles'
import { Button } from '../../buttons/Button/Button'

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

export const DatePickerField: FC<DatePickerFieldProps> = props => {
  const { value: initialValue } = props
  const [value, setValue] = useState(initialValue ? new Date(initialValue) : null)

  return (
    <div css={datePickerContainer}>
      <TextField value={value?.toLocaleDateString()} />
      <Dayzed
        onDateSelected={(selectedDate) => setValue(selectedDate.date)}
        selected={value}
        render={({ calendars, getBackProps, getForwardProps, getDateProps }) => (
          <div css={[calendarContainer]}>
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
        )}
      />
    </div>
  )
}

export interface DatePickerFieldProps extends FormProps {
  value?: string
}
