/** @jsx jsx */
import React, { FC, Children } from 'react'
import { jsx } from '@emotion/core'

import { FormProps } from '../form-props'

import { listStyles, innerRadioStyles } from './styles'

export const RadioField: FC<RadioFieldProps> = props => {
  return (
    <ul css={[listStyles]}>
      {Children.map(props.children, (child, index) => {
        return <li css={[listStyles, innerRadioStyles]} key={index}>{child}</li>
      })}
    </ul>
  )
}

export interface RadioFieldProps extends FormProps {}
