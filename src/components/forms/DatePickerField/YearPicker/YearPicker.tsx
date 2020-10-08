/** @jsx jsx */
import { FC, useContext, useState } from 'react'
import { jsx } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Button } from '../../../buttons/Button/Button'
import { I18nContext } from '../../../contexts/I18nContext'

import { CalendarContainer } from '../CalendarContainer/CalendarContainer'

import { buttonBar, calendarButtons, calendarBoard, header, calendarButtonsToday, calendarButtonsSelected } from './styles'

const BUTTONS_QUANTITY = 9
const CURRENT_YEAR = new Date().getFullYear()

interface YearPickerProps {
  isSmall?: boolean
  selected?: number
}

export const YearPicker: FC<YearPickerProps> = ({ isSmall, selected }) => {
  const { addTranslations, t } = useContext(I18nContext)
  const [firstYear, setFirstYear] = useState((selected ?? CURRENT_YEAR) - Math.trunc(BUTTONS_QUANTITY / 2))

  const years = new Array(BUTTONS_QUANTITY).fill(firstYear).map((year, index) => year + index)

  return (
    <CalendarContainer isSmall={isSmall}>
      <div css={[buttonBar]}>
        <Button isFilled icon="arrow-left" onClick={() => setFirstYear(firstYear - BUTTONS_QUANTITY)}>
          {t('uikit:buttonPrevious')}
        </Button>
        <Button isFilled onClick={() => setFirstYear(firstYear + BUTTONS_QUANTITY)}>
          {t('uikit:buttonNext')} <FontAwesomeIcon size="sm" icon={{ prefix: 'fas', iconName: 'arrow-right' }} />
        </Button>
      </div>
      <div css={[header]}>
        Year
      </div>
      <div css={calendarBoard}>
        {years.map(year => (
          <button
            key={year}
            css={[
              calendarButtons,
              year === CURRENT_YEAR ? calendarButtonsToday : null,
              year === selected ? calendarButtonsSelected : null,
            ]}
          >
            {year}
          </button>
        ))}
      </div>
    </CalendarContainer>
  )
}
