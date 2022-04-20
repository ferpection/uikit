import { FC, PropsWithChildren, ReactNode } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Button } from '../../../buttons/Button/Button'
import { useTheme } from '../../../../hooks/useTheme'

import { smallCalendarContainer, calendarContainer, buttonBar, header, calendarBoard } from './styles'

interface CalendarContainerProps {
  title?: ReactNode
  isSmall?: boolean
  previousButtonArgs?: Record<string, any>
  nextButtonArgs?: Record<string, any>
  previousButtonLabel?: string
  nextButtonLabel?: string
}

export function CalendarContainer({
  isSmall,
  children,
  previousButtonArgs,
  previousButtonLabel = 'Previous',
  nextButtonArgs,
  nextButtonLabel = 'Next',
  title,
}: PropsWithChildren<CalendarContainerProps>) {
  const theme = useTheme()

  return (
    <div css={[isSmall ? smallCalendarContainer(theme) : calendarContainer(theme)]}>
      <div css={[buttonBar]}>
        <Button isFilled icon="arrow-left" isDisabled={previousButtonArgs == null} {...previousButtonArgs}>
          {previousButtonLabel}
        </Button>
        <Button isFilled icon="arrow-right" iconPosition="end" isDisabled={nextButtonArgs == null} {...nextButtonArgs}>
          {nextButtonLabel}
        </Button>
      </div>
      {title != null && <div css={[header]}>{title}</div>}
      <div css={calendarBoard}>{children}</div>
    </div>
  )
}
