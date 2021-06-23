/** @jsx jsx */
import { FC, ChangeEvent, FocusEvent } from 'react'
import { jsx } from '@emotion/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { findIconDefinition, IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core'

import { useTheme } from '../../../hooks/useTheme'
import { ActionType } from '../../action-type'

import { handlerStyles, labelStyles, inputStyles, labelStylesDisabled } from './styles'

export interface SwitchButtonProps {
  className?: string
  value: string
  icon?: IconName
  iconStore?: IconPrefix
  isDisabled?: boolean
  isChecked?: boolean
  isFilled?: boolean
  actionType?: ActionType
  onValueChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: FocusEvent) => void
  onFocus?: (event: FocusEvent) => void
}

export const SwitchButton: FC<SwitchButtonProps> = props => {
  const theme = useTheme()

  const { actionType, isFilled } = props
  const color = theme.colors[actionType] || theme.colors.action

  const { iconStore, icon: iconName } = props
  const icon = findIconDefinition({ prefix: iconStore, iconName })
  const iconExist = icon != null

  return (
    <label
      className={props.className}
      css={[labelStyles({ color, isFilled }), props.isDisabled && labelStylesDisabled]}
    >
      <input
        css={[inputStyles]}
        type="checkbox"
        value={props.value}
        checked={props.isChecked}
        onChange={props.onValueChange}
        disabled={props.isDisabled}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
      <div css={[handlerStyles({ color, isFilled })]}>{iconExist && <FontAwesomeIcon icon={icon} size="sm" />}</div>
    </label>
  )
}

SwitchButton.defaultProps = {
  isDisabled: false,
  isFilled: false,
  actionType: 'action',
  icon: 'circle',
  iconStore: 'fas',
  onValueChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
}
