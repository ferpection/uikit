/** @jsx jsx */
import { FC, useContext } from 'react'
import { jsx } from '@emotion/core'
import { RenderProps } from 'dayzed'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Button } from '../../../buttons/Button/Button'
import { I18nContext } from '../../../contexts/I18nContext'

import {
  calendarContainer,
  buttonBar,
  header,
  calendarButtons,
  headerWeekday,
  calendarButtonsToday,
  calendarButtonsSelected,
  calendarBoard,
  emptyButtonSpace,
  smallCalendarContainer,
} from './styles'
import { englishStrings, frenchStrings } from './locales'

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

export const Calendar: FC<CalendarProps> = ({ calendars, getBackProps, getDateProps, getForwardProps, isSmall }) => {
  const { addTranslations, t } = useContext(I18nContext)

  addTranslations('en', englishStrings)
  addTranslations('fr', frenchStrings)

  return (
    <div css={[isSmall ? smallCalendarContainer : calendarContainer]}>
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
            {t(monthNamesShort[calendar.month])} {calendar.year}
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
    </div>
  )
}

export interface CalendarProps extends RenderProps {
  isSmall?: boolean
}
