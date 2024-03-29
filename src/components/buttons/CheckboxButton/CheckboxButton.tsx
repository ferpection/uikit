import { ChangeEvent, FocusEvent, PropsWithChildren } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useTheme } from '../../../hooks/useTheme'
import { ActionType } from '../../action-type'

import {
  checkboxStyles,
  labelStyles,
  inputStyles,
  labelStylesDisabled,
  childrenStyles,
  checkboxStylesTopSticked,
  checkboxStylesBottomSticked,
} from './styles'

export interface CheckboxButtonProps {
  value: string
  isDisabled?: boolean
  isChecked?: boolean
  checkboxPosition?: 'top' | 'bottom' | 'center'
  actionType?: ActionType
  onValueChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: FocusEvent) => void
  onFocus?: (event: FocusEvent) => void
}

export function CheckboxButton(props: PropsWithChildren<CheckboxButtonProps>) {
  const theme = useTheme()

  const hoverColorKey = `${props.actionType}Light` as 'positiveLight' | 'negativeLight' | 'actionLight'

  const color = theme.colors[props.actionType] || theme.colors.action
  const hoverColor = theme.colors[hoverColorKey] || theme.colors.actionLight

  return (
    <label css={[labelStyles({ color }), props.isDisabled && labelStylesDisabled]}>
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
      <div
        css={[
          checkboxStyles({ color, lighterColor: hoverColor }),
          props.checkboxPosition === 'top' && checkboxStylesTopSticked,
          props.checkboxPosition === 'bottom' && checkboxStylesBottomSticked,
        ]}
      >
        <FontAwesomeIcon icon={props.actionType === 'negative' ? 'times' : 'check'} fixedWidth />
      </div>
      <div css={childrenStyles}>{props.children}</div>
    </label>
  )
}
CheckboxButton.defaultProps = {
  isDisabled: false,
  checkboxPosition: 'center',
  actionType: 'action',
  onValueChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
}
