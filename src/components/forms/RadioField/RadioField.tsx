/** @jsx jsx */
import React, { FC } from 'react'
import { jsx } from '@emotion/core'

import { FormProps } from '../form-props'

import { radioStyles, labelStyles, inputStyles } from './styles'

export const RadioField: FC<RadioFieldProps> = props => {
  return (
    <label css={[labelStyles]}>
      <input css={[inputStyles]} type="radio" value={props.value} />
      <div css={[radioStyles]} />
      {props.label}
    </label>
  )
}

export interface RadioFieldProps extends FormProps {
  label?: string
  value?: string
}
