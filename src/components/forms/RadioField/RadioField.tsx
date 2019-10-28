/** @jsx jsx */
import React, { FC, Children } from 'react'
import { jsx } from '@emotion/core'

import { FormProps } from '../form-props'

export const RadioField: FC<RadioFieldProps> = props => {
  return (
    <ul>
      {Children.map(props.children, (child, index) => {
        return <li key={index}>{child}</li>
      })}
    </ul>
  )
}

export interface RadioFieldProps extends FormProps {}
