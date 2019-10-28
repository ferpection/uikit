/** @jsx jsx */
import React, { FC, Children, cloneElement, ReactElement, isValidElement } from 'react'
import { jsx } from '@emotion/core'

import { FormProps } from '../form-props'

import { listStyles, innerRadioStyles, innerRadioStylesDisabled } from './styles'

export const RadioField: FC<RadioFieldProps> = props => {
  return (
    <ul css={[listStyles]}>
      {Children.map(props.children, (child, index) => {
        if (!isValidElement(child)) {
          return null
        }

        return <li
          css={[
            listStyles,
            innerRadioStyles,
            props.isDisabled
              ? innerRadioStylesDisabled
              : null,
            ]}
          key={index}
        >
          {cloneElement(child, { isDisabled: props.isDisabled })}
        </li>
      })}
    </ul>
  )
}

export interface RadioFieldProps extends FormProps {}
