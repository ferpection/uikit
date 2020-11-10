/** @jsx jsx */
import { FC, ChangeEvent, FocusEvent } from 'react'
import { jsx } from '@emotion/core'

import { useTheme } from '../../contexts/ThemeContext'

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
  actionType: 'action' | 'positive' | 'negative'
  onValueChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: FocusEvent) => void
  onFocus?: (event: FocusEvent) => void
}

export const CheckboxButton: FC<CheckboxButtonProps> = props => {
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
      />
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
