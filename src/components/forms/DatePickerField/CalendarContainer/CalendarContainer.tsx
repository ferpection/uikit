/** @jsx jsx */
import { FC, ReactNode } from 'react'
import { jsx } from '@emotion/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Button } from '../../../buttons/Button/Button'
import { useTheme } from '../../../contexts/ThemeContext'

import { smallCalendarContainer, calendarContainer, buttonBar, header, calendarBoard } from './styles'

interface CalendarContainerProps {
  title?: ReactNode
  isSmall?: boolean
  previousButtonArgs?: Record<string, any>
  nextButtonArgs?: Record<string, any>
  previousButtonLabel?: string
  nextButtonLabel?: string
}

export const CalendarContainer: FC<CalendarContainerProps> = ({
  isSmall,
  children,
  previousButtonArgs,
  previousButtonLabel = 'Previous',
  nextButtonArgs,
  nextButtonLabel = 'Next',
  title,
}) => {
  const theme = useTheme()

  return (
    <div css={[isSmall ? smallCalendarContainer(theme) : calendarContainer(theme)]}>
      <div css={[buttonBar]}>
        <Button isFilled icon="arrow-left" isDisabled={previousButtonArgs == null} {...previousButtonArgs}>
          {previousButtonLabel}
        </Button>
        <Button isFilled isDisabled={nextButtonArgs == null} {...nextButtonArgs}>
          {nextButtonLabel} <FontAwesomeIcon size="sm" icon={{ prefix: 'fas', iconName: 'arrow-right' }} />
        </Button>
      </div>
      {title != null && <div css={[header]}>{title}</div>}
      <div css={calendarBoard}>{children}</div>
    </div>
  )
}
