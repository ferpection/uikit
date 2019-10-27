/** @jsx jsx */
import React, { FC } from 'react'
import { jsx } from '@emotion/core'

import { FormProps } from '../../forms/form-props'

import { radioStyles, labelStyles, inputStyles, labelStylesDisabled } from './styles'

export const RadioButton: FC<RadioButtonProps> = props => {
  return (
    <label css={[labelStyles, props.isDisabled ? labelStylesDisabled : null]}>
      <input css={[inputStyles]} type="radio" value={props.value} disabled={props.isDisabled} />
      <div css={[radioStyles]} />
      {props.label}
    </label>
  )
}

export interface RadioButtonProps extends FormProps {
  label?: string
  value?: string
  isDisabled?: boolean
}
