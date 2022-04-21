import { PropsWithChildren, ReactNode } from 'react'

import { Button } from '../../../buttons/Button/Button'
import { useTheme } from '../../../../hooks/useTheme'

import { smallCalendarContainer, calendarContainer, buttonBar, header, calendarBoard } from './styles'

interface CalendarContainerProps {
  title?: ReactNode
  isSmall?: boolean
  previousButtonArgs?: Record<string, any>
  nextButtonArgs?: Record<string, any>
  cancelButtonArgs?: Record<string, any>
  previousButtonLabel?: string
  nextButtonLabel?: string
  cancelButtonLabel?: string
}

export function CalendarContainer({
  isSmall,
  children,
  previousButtonArgs,
  previousButtonLabel = 'Previous',
  nextButtonArgs,
  nextButtonLabel = 'Next',
  cancelButtonArgs,
  cancelButtonLabel = 'Cancel',
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
      <Button actionType="negative" isFilled icon="times" isDisabled={nextButtonArgs == null} {...cancelButtonArgs}>
        {cancelButtonLabel}
      </Button>
    </div>
  )
}
