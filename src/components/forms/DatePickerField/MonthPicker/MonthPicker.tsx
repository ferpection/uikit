/** @jsx jsx */
import { FC } from 'react'
import { jsx } from '@emotion/react'

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
  monthComponentTitle?: string
}

export const MonthPicker: FC<MonthPickerProps> = ({ isSmall, selected, onMonthSelected = () => {}, previousButtonLabel, nextButtonLabel, monthComponentTitle = 'Months', language }) => {
  const months = new Array(12).fill(0).map((_, i) => composeMonthName(i, language))

  return (
    <CalendarContainer title={monthComponentTitle} isSmall={isSmall} previousButtonLabel={previousButtonLabel} nextButtonLabel={nextButtonLabel}>
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
