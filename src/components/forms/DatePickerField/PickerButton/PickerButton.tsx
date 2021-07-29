import { useTheme } from '../../../../hooks/useTheme'

import { calendarButtons, calendarButtonsToday, calendarButtonsSelected } from './styles'

export interface PickerButtonProps {
  label?: string
  onClick?: () => void
  isSelected?: boolean
  isCurrent?: boolean
}

export function PickerButton(props: PickerButtonProps) {
  const { label, onClick = () => {}, isCurrent, isSelected, ...restProps } = props
  const theme = useTheme()

  return (
    <button
      css={[
        calendarButtons,
        isCurrent ? calendarButtonsToday : null,
        isSelected ? calendarButtonsSelected(theme) : null,
      ]}
      onClick={onClick}
      {...restProps}
    >
      {label}
    </button>
  )
}
