/** @jsx jsx */
import { FC, useContext, useState } from 'react'
import { jsx } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Button } from '../../../buttons/Button/Button'
import { I18nContext } from '../../../contexts/I18nContext'

import { CalendarContainer } from '../CalendarContainer/CalendarContainer'

import { buttonBar, calendarButtons, calendarBoard, header, calendarButtonsToday, calendarButtonsSelected } from './styles'

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
  'uikit:decemberFull'
]

interface MonthPickerProps {
  isSmall?: boolean
  selected?: number
  onMonthSelected?: (year: number) => void
}

export const MonthPicker: FC<MonthPickerProps> = ({ isSmall, selected, onMonthSelected = () => {} }) => {
  const { t } = useContext(I18nContext)

  return (
    <CalendarContainer isSmall={isSmall}>
      <div css={[buttonBar]}>
        <Button isFilled icon="arrow-left" isDisabled>
          {t('uikit:buttonPrevious')}
        </Button>
        <Button isFilled isDisabled>
          {t('uikit:buttonNext')} <FontAwesomeIcon size="sm" icon={{ prefix: 'fas', iconName: 'arrow-right' }} />
        </Button>
      </div>
      <div css={[header]}>
        {t('uikit:month')}
      </div>
      <div css={calendarBoard}>
        {MONTHS.map((month, index) => (
          <button
            key={month}
            css={[
              calendarButtons,
              index === CURRENT_MONTH ? calendarButtonsToday : null,
              index === selected ? calendarButtonsSelected : null,
            ]}
            onClick={() => onMonthSelected(index)}
          >
            {t(month)}
          </button>
        ))}
      </div>
    </CalendarContainer>
  )
}
