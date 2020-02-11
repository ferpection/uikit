/** @jsx jsx */
import { FC, ChangeEvent, FocusEvent } from 'react'
import { jsx } from '@emotion/core'

import {
  checkboxStyles,
  labelStyles,
  inputStyles,
  labelStylesDisabled,
  childrenStyles,
  checkboxStylesTopSticked,
  checkboxStylesBottomSticked,
} from './styles'

export const CheckboxButton: FC<CheckboxButtonProps> = props => (
  <label css={[labelStyles, props.isDisabled && labelStylesDisabled]}>
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
        checkboxStyles,
        props.checkboxPosition === 'top' && checkboxStylesTopSticked,
        props.checkboxPosition === 'bottom' && checkboxStylesBottomSticked,
      ]}
    />
    <div css={childrenStyles}>{props.children}</div>
  </label>
)

export interface CheckboxButtonProps {
  value: string
  isDisabled?: boolean
  isChecked?: boolean
  checkboxPosition?: 'top' | 'bottom' | 'center'
  onValueChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: FocusEvent) => void
  onFocus?: (event: FocusEvent) => void
}
