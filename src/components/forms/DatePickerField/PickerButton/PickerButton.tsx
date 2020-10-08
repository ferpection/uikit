/** @jsx jsx */
import { jsx } from '@emotion/core'

import { calendarButtons, calendarButtonsToday, calendarButtonsSelected } from './styles'

export interface PickerButtonProps {
  label?: string
  onClick?: () => void
  isSelected?: boolean
  isCurrent?: boolean
}

export function PickerButton(props: PickerButtonProps) {
  const { label, onClick = () => {}, isCurrent, isSelected, ...restProps } = props

  return (
    <button
      css={[calendarButtons, isCurrent ? calendarButtonsToday : null, isSelected ? calendarButtonsSelected : null]}
      onClick={onClick}
      {...restProps}
    >
      {label}
    </button>
  )
}
