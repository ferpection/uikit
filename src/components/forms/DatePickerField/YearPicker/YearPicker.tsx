/** @jsxImportSource @emotion/react */
import { FC, useState } from 'react'
import { jsx } from '@emotion/react'

import { CalendarContainer } from '../CalendarContainer/CalendarContainer'
import { PickerButton } from '../PickerButton/PickerButton'

const BUTTONS_QUANTITY = 15
const CURRENT_YEAR = new Date().getFullYear()

interface YearPickerProps {
  isSmall?: boolean
  selected?: number
  onYearSelected?: (year: number) => void

  previousButtonLabel?: string
  nextButtonLabel?: string
  title?: string
}

export const YearPicker: FC<YearPickerProps> = ({
  isSmall,
  selected,
  onYearSelected = () => {},
  previousButtonLabel,
  nextButtonLabel,
  title = 'Years',
}) => {
  const [firstYear, setFirstYear] = useState((selected ?? CURRENT_YEAR) - Math.trunc(BUTTONS_QUANTITY / 2))

  const years = new Array(BUTTONS_QUANTITY).fill(firstYear).map((year, index) => year + index)

  return (
    <CalendarContainer
      title={title}
      isSmall={isSmall}
      previousButtonArgs={{ onClick: () => setFirstYear(firstYear - BUTTONS_QUANTITY) }}
      nextButtonArgs={{ onClick: () => setFirstYear(firstYear + BUTTONS_QUANTITY) }}
      previousButtonLabel={previousButtonLabel}
      nextButtonLabel={nextButtonLabel}
    >
      {years.map(year => (
        <PickerButton
          key={year}
          label={year}
          isCurrent={year === CURRENT_YEAR}
          isSelected={year === selected}
          onClick={() => onYearSelected(year)}
        />
      ))}
    </CalendarContainer>
  )
}
