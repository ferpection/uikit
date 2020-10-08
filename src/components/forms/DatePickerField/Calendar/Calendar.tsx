/** @jsx jsx */
import { FC, useContext } from 'react'
import { jsx } from '@emotion/core'
import { RenderProps } from 'dayzed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Button } from '../../../buttons/Button/Button'
import { I18nContext } from '../../../contexts/I18nContext'

import { CalendarContainer } from '../CalendarContainer/CalendarContainer'

import {
  buttonBar,
  header,
  calendarButtons,
  headerWeekday,
  calendarButtonsToday,
  calendarButtonsSelected,
  calendarBoard,
  emptyButtonSpace,
} from './styles'


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

export interface CalendarProps extends RenderProps {
  isSmall?: boolean
  onYearSelectionAsked?: () => void
}

export const Calendar: FC<CalendarProps> = ({ calendars, getBackProps, getDateProps, getForwardProps, isSmall, onYearSelectionAsked = () => {} }) => {
  const { t } = useContext(I18nContext)

  return (
    <CalendarContainer isSmall={isSmall}>
      <div css={[buttonBar]}>
        <Button isFilled icon="arrow-left" {...getBackProps({ calendars })}>
          {t('uikit:buttonPrevious')}
        </Button>
        <Button isFilled {...getForwardProps({ calendars })}>
          {t('uikit:buttonNext')} <FontAwesomeIcon size="sm" icon={{ prefix: 'fas', iconName: 'arrow-right' }} />
        </Button>
      </div>
      {calendars.map(calendar => (
        <div key={`${calendar.month}${calendar.year}`}>
          <div css={[header]}>
            <Button isRaw onClick={onYearSelectionAsked}>{t(monthNamesShort[calendar.month])} {calendar.year}</Button>
          </div>
          {weekdayNamesShort.map(weekday => (
            <div key={`${calendar.month}${calendar.year}${weekday}`} css={[calendarButtons, headerWeekday]}>
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
    </CalendarContainer>
  )
}
