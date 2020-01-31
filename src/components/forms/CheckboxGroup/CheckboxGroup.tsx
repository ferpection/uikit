/** @jsx jsx */
import { FC, Children, cloneElement, useState, isValidElement, ChangeEvent, useEffect, FocusEvent } from 'react'
import { jsx } from '@emotion/core'

import { FormProps } from '../form-props'

import { listStyles, listItemStyles, innerCheckboxStyles, innerCheckboxStylesDisabled } from './styles'

export const CheckboxGroup: FC<CheckboxGroupProps> = props => {
  const [values, setValues] = useState(props.value || [])
  const { onValueChange = () => {}, isDisabled, onBlur: handleBlur, onFocus: handleFocus } = props

  useEffect(() => {
    setValues(props.value || [])
  }, [props.value])

  useEffect(() => {
    onValueChange(values)
  }, [values])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const option = event.target.value
    if (values.includes(option)) {
      setValues(values.filter(opt => opt !== option))
      return
    }

    setValues([...values, event.target.value])
  }

  return (
    <ul css={[listStyles]} onBlur={handleBlur} onFocus={handleFocus}>
      {Children.map(props.children, (child, index) => {
        if (!isValidElement(child)) {
          return null
        }

        return (
          <li
            css={[
              listStyles,
              listItemStyles,
              innerCheckboxStyles,
              props.isDisabled ? innerCheckboxStylesDisabled : null,
            ]}
            key={index}
          >
            {cloneElement(child, {
              isDisabled,
              onValueChange: handleChange,
              isChecked: values.includes(child.props.value),
            })}
          </li>
        )
      })}
    </ul>
  )
}

export interface CheckboxGroupProps extends FormProps {
  value?: string[]
  onValueChange?: (value: string[]) => void
  placeholder?: undefined
  onBlur?: (event: FocusEvent<HTMLUListElement>) => void
  onFocus?: (event: FocusEvent<HTMLUListElement>) => void
}
