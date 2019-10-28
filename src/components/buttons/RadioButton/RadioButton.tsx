/** @jsx jsx */
import React, { FC, ChangeEvent, FocusEvent } from 'react'
import { jsx } from '@emotion/core'

import { radioStyles, labelStyles, inputStyles, labelStylesDisabled } from './styles'

export const RadioButton: FC<RadioButtonProps> = props => (
  <label css={[labelStyles, props.isDisabled ? labelStylesDisabled : null]}>
    <input
      css={[inputStyles]}
      type="radio"
      value={props.value}
      checked={props.isChecked}
      onChange={props.onChange}
      disabled={props.isDisabled}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
    <div css={[radioStyles]} />
    {props.children}
  </label>
)

export interface RadioButtonProps {
  children?: string
  value: string
  isDisabled?: boolean
  isChecked?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: FocusEvent) => void
  onFocus?: (event: FocusEvent) => void
}
