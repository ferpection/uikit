/** @jsx jsx */
import { FC, useContext } from 'react'
import { jsx } from '@emotion/core'

import { I18nContext } from '../../../contexts/I18nContext'

import { CalendarContainer } from '../CalendarContainer/CalendarContainer'
import { PickerButton } from '../PickerButton/PickerButton'

const CURRENT_MONTH = new Date().getMonth()
const MONTHS = [
  'uikit:januaryFull',
  'uikit:februaryFull',
  'uikit:marchFull',
  'uikit:aprilFull',
  'uikit:mayFull',
  'uikit:juneFull',
  'uikit:julyFull',
  'uikit:augustFull',
  'uikit:septemberFull',
  'uikit:octoberFull',
  'uikit:novemberFull',
  'uikit:decemberFull',
]

interface MonthPickerProps {
  isSmall?: boolean
  selected?: number
  onMonthSelected?: (year: number) => void
}

export const MonthPicker: FC<MonthPickerProps> = ({ isSmall, selected, onMonthSelected = () => {} }) => {
  const { t } = useContext(I18nContext)

  return (
    <CalendarContainer title={t('uikit:month')} isSmall={isSmall}>
      {MONTHS.map((month, index) => (
        <PickerButton
          key={month}
          label={t(month)}
          isSelected={index === selected}
          isCurrent={index === CURRENT_MONTH}
          onClick={() => onMonthSelected(index)}
        />
      ))}
    </CalendarContainer>
  )
}
