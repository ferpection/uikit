/** @jsx jsx */
import { FC, useContext, useState } from 'react'
import { jsx } from '@emotion/react'

import { I18nContext } from '../../../contexts/I18nContext'

import { CalendarContainer } from '../CalendarContainer/CalendarContainer'
import { PickerButton } from '../PickerButton/PickerButton'

const BUTTONS_QUANTITY = 15
const CURRENT_YEAR = new Date().getFullYear()

interface YearPickerProps {
  isSmall?: boolean
  selected?: number
  onYearSelected?: (year: number) => void
}

export const YearPicker: FC<YearPickerProps> = ({ isSmall, selected, onYearSelected = () => {} }) => {
  const { t } = useContext(I18nContext)
  const [firstYear, setFirstYear] = useState((selected ?? CURRENT_YEAR) - Math.trunc(BUTTONS_QUANTITY / 2))

  const years = new Array(BUTTONS_QUANTITY).fill(firstYear).map((year, index) => year + index)

  return (
    <CalendarContainer
      title={t('uikit:years')}
      isSmall={isSmall}
      previousButtonArgs={{ onClick: () => setFirstYear(firstYear - BUTTONS_QUANTITY) }}
      nextButtonArgs={{ onClick: () => setFirstYear(firstYear + BUTTONS_QUANTITY) }}
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
