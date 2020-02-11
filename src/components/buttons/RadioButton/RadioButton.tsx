/** @jsx jsx */
import { FC, ChangeEvent, FocusEvent } from 'react'
import { jsx } from '@emotion/core'

import {
  radioStyles,
  labelStyles,
  inputStyles,
  labelStylesDisabled,
  childrenStyles,
  radioStylesTopSticked,
  radioStylesBottomSticked,
} from './styles'

export const RadioButton: FC<RadioButtonProps> = props => (
  <label css={[labelStyles, props.isDisabled && labelStylesDisabled]}>
    <input
      css={[inputStyles]}
      type="radio"
      value={props.value}
      checked={props.isChecked}
      onChange={props.onValueChange}
      disabled={props.isDisabled}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
    <div
      css={[
        radioStyles,
        props.radioPosition === 'top' && radioStylesTopSticked,
        props.radioPosition === 'bottom' && radioStylesBottomSticked,
      ]}
    />
    <div css={[childrenStyles]}>{props.children}</div>
  </label>
)

export interface RadioButtonProps {
  value: string
  isDisabled?: boolean
  isChecked?: boolean
  radioPosition?: 'top' | 'bottom' | 'center'
  onValueChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: FocusEvent) => void
  onFocus?: (event: FocusEvent) => void
}
