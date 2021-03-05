/** @jsx jsx */
import { FC, ReactNode, useContext } from 'react'
import { jsx } from '@emotion/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Button } from '../../../buttons/Button/Button'
import { I18nContext } from '../../../contexts/I18nContext'

import { smallCalendarContainer, calendarContainer, buttonBar, header, calendarBoard } from './styles'

interface CalendarContainerProps {
  title?: ReactNode
  isSmall?: boolean
  previousButtonArgs?: Record<string, any>
  nextButtonArgs?: Record<string, any>
}

export const CalendarContainer: FC<CalendarContainerProps> = ({
  isSmall,
  children,
  previousButtonArgs,
  nextButtonArgs,
  title,
}) => {
  const { t } = useContext(I18nContext)

  return (
    <div css={[isSmall ? smallCalendarContainer : calendarContainer]}>
      <div css={[buttonBar]}>
        <Button isFilled icon="arrow-left" isDisabled={previousButtonArgs == null} {...previousButtonArgs}>
          {t('uikit:buttonPrevious')}
        </Button>
        <Button isFilled isDisabled={nextButtonArgs == null} {...nextButtonArgs}>
          {t('uikit:buttonNext')} <FontAwesomeIcon size="sm" icon={{ prefix: 'fas', iconName: 'arrow-right' }} />
        </Button>
      </div>
      {title != null && <div css={[header]}>{title}</div>}
      <div css={calendarBoard}>{children}</div>
    </div>
  )
}
