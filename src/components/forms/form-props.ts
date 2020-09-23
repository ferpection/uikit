import { SyntheticEvent } from 'react'

import { FormErrors } from './form-errors';

export interface FormProps {
  value?: string | string[] | number | Date | File[]
  errors?: FormErrors
  placeholder?: string
  isDisabled?: boolean
  isRequired?: boolean
  onValueChange?: (value: string | number | string[] | Date | File[], event?: SyntheticEvent) => void
  onErrors?: (errors: FormErrors) => void
  onBlur?: (event?: SyntheticEvent) => void
  onFocus?: (event?: SyntheticEvent) => void
}
