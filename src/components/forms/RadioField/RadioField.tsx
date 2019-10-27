import React, { FC } from 'react'

import { FormProps } from '../form-props'

export const RadioField: FC<RadioFieldProps> = props => {
  return (
    <label>
      <input type="radio" value={props.value} />
      <div className="radio" />
      {props.label}
    </label>
  )
}

export interface RadioFieldProps extends FormProps {
  label: string
  value: string
}
