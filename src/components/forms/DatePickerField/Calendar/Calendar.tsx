/** @jsx jsx */
import { FC, ReactNode, useContext } from 'react'
import { jsx } from '@emotion/react'
import { Props as DayzedProps, useDayzed } from 'dayzed'

import { Button } from '../../../buttons/Button/Button'
import { I18nContext } from '../../../contexts/I18nContext'

import { CalendarContainer } from '../CalendarContainer/CalendarContainer'

import { DatePickerButton } from './DatePickerButton/DatePickerButton'

import { headerWeekday, calendarBoard, emptyButtonSpace } from './styles'

const monthNamesShort = [
  'uikit:januaryShort',
  'uikit:februaryShort',
  'uikit:marchShort',
  'uikit:aprilShort',
  'uikit:mayShort',
  'uikit:juneShort',
  'uikit:julyShort',
  'uikit:augustShort',
  'uikit:septemberShort',
  'uikit:octoberShort',
  'uikit:novemberShort',
  'uikit:decemberShort',
]
const weekdayNamesShort = [
  'uikit:mondayShort',
  'uikit:tuesdayShort',
  'uikit:wednesdayShort',
  'uikit:thursdayShort',
  'uikit:fridayShort',
  'uikit:saturdayShort',
  'uikit:sundayShort',
]

export interface CalendarProps extends DayzedProps {
  isSmall?: boolean
  enableOtherDateComponentSelection?: boolean
  onOtherDateComponentSelectionAsked?: () => void
}

export const Calendar: FC<CalendarProps> = props => {
  const { isSmall, enableOtherDateComponentSelection, onOtherDateComponentSelectionAsked = () => {} } = props

  const { t } = useContext(I18nContext)
  const { calendars, getBackProps, getDateProps, getForwardProps } = useDayzed(props)

  const [calendar] = calendars

  let title: ReactNode = `${t(monthNamesShort[calendar.month])} ${calendar.year}`
  if (enableOtherDateComponentSelection) {
    title = (
      <Button isRaw onClick={onOtherDateComponentSelectionAsked}>
        {t(monthNamesShort[calendar.month])} {calendar.year}
      </Button>
    )
  }

  return (
    <CalendarContainer
      title={title}
      isSmall={isSmall}
      previousButtonArgs={getBackProps({ calendars })}
      nextButtonArgs={getForwardProps({ calendars })}
    >
      <div key={`${calendar.month}${calendar.year}`}>
        {weekdayNamesShort.map(weekday => (
          <div key={`${calendar.month}${calendar.year}${weekday}`} css={[headerWeekday]}>
            {t(weekday)}
          </div>
        ))}
        <div css={calendarBoard}>
          {calendar.weeks.map((week, weekIndex) =>
            week.map((dateObj, index) => {
              const key = `${calendar.month}${calendar.year}${weekIndex}${index}`

              if (!dateObj) {
                return <div css={[emptyButtonSpace]} key={key} />
              }

              const { date, selected, selectable, today } = dateObj

              return (
                <DatePickerButton
                  key={key}
                  label={selectable ? String(date.getDate()) : 'X'}
                  isCurrent={today}
                  isSelected={selected}
                  {...getDateProps({ dateObj })}
                />
              )
            }),
          )}
        </div>
      </div>
    </CalendarContainer>
  )
}
