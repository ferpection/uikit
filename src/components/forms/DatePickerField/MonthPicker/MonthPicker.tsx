import { FC, PropsWithChildren } from 'react'

import { CalendarContainer } from '../CalendarContainer/CalendarContainer'
import { PickerButton } from '../PickerButton/PickerButton'

const CURRENT_MONTH = new Date().getMonth()

function composeMonthName(monthIndex: number, language = 'en') {
  return Intl.DateTimeFormat(language.replace(/_/g, '-'), { month: 'long' }).format(new Date(2021, monthIndex))
}

interface MonthPickerProps {
  isSmall?: boolean
  selected?: number
  onMonthSelected?: (year: number) => void

  language: string
  previousButtonLabel?: string
  nextButtonLabel?: string
  title?: string
}

export function MonthPicker({
  isSmall,
  selected,
  onMonthSelected = () => {},
  previousButtonLabel,
  nextButtonLabel,
  title = 'Months',
  language,
}: PropsWithChildren<MonthPickerProps>) {
  const months = new Array(12).fill(0).map((_, i) => composeMonthName(i, language))

  return (
    <CalendarContainer
      title={title}
      isSmall={isSmall}
      previousButtonLabel={previousButtonLabel}
      nextButtonLabel={nextButtonLabel}
    >
      {months.map((month, index) => (
        <PickerButton
          key={month}
          label={month}
          isSelected={index === selected}
          isCurrent={index === CURRENT_MONTH}
          onClick={() => onMonthSelected(index)}
        />
      ))}
    </CalendarContainer>
  )
}
