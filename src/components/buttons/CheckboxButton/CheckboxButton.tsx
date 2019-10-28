/** @jsx jsx */
import React, { FC, ChangeEvent, FocusEvent } from 'react'
import { jsx } from '@emotion/core'

import { checkboxStyles, labelStyles, inputStyles, labelStylesDisabled } from './styles'

export const CheckboxButton: FC<CheckboxButtonProps> = props => (
  <label css={[labelStyles, props.isDisabled ? labelStylesDisabled : null]}>
    <input
      css={[inputStyles]}
      type="checkbox"
      value={props.value}
      checked={props.isChecked}
      onChange={props.onChange}
      disabled={props.isDisabled}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
    <div css={[checkboxStyles]} />
    {props.children}
  </label>
)

export interface CheckboxButtonProps {
  children?: string
  value?: string
  isDisabled?: boolean
  isChecked?: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: FocusEvent) => void
  onFocus?: (event: FocusEvent) => void
}
