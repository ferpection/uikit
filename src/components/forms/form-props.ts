import { SyntheticEvent } from 'react'

import { FormErrors } from './form-errors'
import { FormValidator } from './form-validator'

export type FormValue = string | string[] | number | Date | File[]

export interface FormProps {
  value?: FormValue
  validators?: FormValidator[]
  placeholder?: string
  isDisabled?: boolean
  isRequired?: boolean
  onValueChange?: (value: FormValue, event?: SyntheticEvent) => void
  onErrors?: (errors: FormErrors) => void
  onBlur?: (event?: SyntheticEvent) => void
  onFocus?: (event?: SyntheticEvent) => void
}

export const defaultFormProps: FormProps = {
  validators: [],
  isDisabled: false,
  isRequired: false,
  onValueChange: () => {},
  onErrors: () => {},
  onBlur: () => {},
  onFocus: () => {},
}
