import {
  FC,
  Children,
  cloneElement,
  useState,
  isValidElement,
  ChangeEvent,
  useEffect,
  FocusEvent,
  PropsWithChildren,
} from 'react'

import useFormValidation from '../../../hooks/useFormValidation'

import { ActionType } from '../../action-type'
import { useTheme } from '../../../hooks/useTheme'

import { defaultFormProps, FormProps } from '../form-props'

import {
  listStyles,
  listItemStyles,
  innerCheckboxStyles,
  listItemDisabledStyles,
  listItemErrorStyles,
  listErrorStyles,
} from './styles'

export interface CheckboxGroupProps extends FormProps {
  className?: string
  value?: string[]
  placeholder?: undefined
  actionType?: ActionType
  onValueChange?: (value: string[]) => void
  onBlur?: (event: FocusEvent<HTMLUListElement>) => void
  onFocus?: (event: FocusEvent<HTMLUListElement>) => void
}

export function CheckboxGroup(props: PropsWithChildren<CheckboxGroupProps>) {
  const theme = useTheme()
  const [values, setValues] = useState(props.value || [])
  const {
    className,
    isDisabled,
    isRequired,
    validators,
    actionType,
    onValueChange,
    onErrors: handleErrors,
    onBlur: handleBlur,
    onFocus: handleFocus,
  } = props

  const { isValid, errors } = useFormValidation(values, [
    (v: string) => ({ 'uikit:required': isRequired && (v == null || v.length < 1) }),
    ...validators,
  ])

  useEffect(() => setValues(props.value || []), [props.value?.join('-') || ''])
  useEffect(() => onValueChange(values), [values.join('-')])
  useEffect(() => handleErrors(errors), [Object.keys(errors).join('-')])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const option = event.target.value
    if (values.includes(option)) {
      setValues(values.filter(opt => opt !== option))
      return
    }

    setValues([...values, event.target.value])
  }

  return (
    <ul
      className={className}
      css={[listStyles, !isValid && listErrorStyles(theme)]}
      onBlur={handleBlur}
      onFocus={handleFocus}
    >
      {Children.map(props.children, (child, index) => {
        if (!isValidElement(child)) {
          return null
        }

        return (
          <li
            css={[
              listItemStyles,
              innerCheckboxStyles,
              isDisabled && listItemDisabledStyles,
              !isValid && listItemErrorStyles(theme),
            ]}
            key={index}
          >
            {cloneElement(child, {
              isDisabled: child.props.isDisabled ? true : isDisabled,
              onValueChange: handleChange,
              actionType: actionType != null ? actionType : child.props.actionType,
              isChecked: values.includes(child.props.value),
              checkboxPosition: 'center',
            })}
          </li>
        )
      })}
    </ul>
  )
}

CheckboxGroup.defaultProps = {
  ...(defaultFormProps as CheckboxGroupProps),
}
