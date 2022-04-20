import { FC, PropsWithChildren, ReactNode } from 'react'

import { Props as DayzedProps, useDayzed } from 'dayzed'

import { Button } from '../../../buttons/Button/Button'

import { CalendarContainer } from '../CalendarContainer/CalendarContainer'

import { DatePickerButton } from './DatePickerButton/DatePickerButton'

import { headerWeekday, calendarBoard, emptyButtonSpace } from './styles'

function composeMonthName(monthIndex: number, year: number, language = 'en') {
  return Intl.DateTimeFormat(language.replace(/_/g, '-'), { month: 'short', year: 'numeric' }).format(
    new Date(year, monthIndex),
  )
}

function composeWeekDayName(dayIndex: number, language = 'en') {
  return Intl.DateTimeFormat(language.replace(/_/g, '-'), { weekday: 'short' }).format(new Date(2021, 2, dayIndex + 1))
}

export interface CalendarProps extends DayzedProps {
  isSmall?: boolean
  enableOtherDateComponentSelection?: boolean
  onOtherDateComponentSelectionAsked?: () => void
  language: string
  previousButtonLabel?: string
  nextButtonLabel?: string
}

export function Calendar(props: PropsWithChildren<CalendarProps>) {
  const {
    isSmall,
    enableOtherDateComponentSelection,
    onOtherDateComponentSelectionAsked = () => {},
    language,
    previousButtonLabel,
    nextButtonLabel,
  } = props
  const { calendars, getBackProps, getDateProps, getForwardProps } = useDayzed(props)

  const [calendar] = calendars

  let title: ReactNode = composeMonthName(calendar.month, calendar.year, language)
  if (enableOtherDateComponentSelection) {
    title = (
      <Button isRaw onClick={onOtherDateComponentSelectionAsked}>
        {composeMonthName(calendar.month, calendar.year, language)}
      </Button>
    )
  }

  const weekdayNamesShort = new Array(7).fill(0).map((_, i) => composeWeekDayName(i, language))

  return (
    <CalendarContainer
      title={title}
      isSmall={isSmall}
      previousButtonArgs={getBackProps({ calendars })}
      nextButtonArgs={getForwardProps({ calendars })}
      previousButtonLabel={previousButtonLabel}
      nextButtonLabel={nextButtonLabel}
    >
      <div key={`${calendar.month}${calendar.year}`}>
        {weekdayNamesShort.map(weekday => (
          <div key={`${calendar.month}${calendar.year}${weekday}`} css={[headerWeekday]}>
            {weekday}
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
