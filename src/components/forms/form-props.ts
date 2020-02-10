import { SyntheticEvent } from 'react'

export interface FormProps {
  value?: string | string[] | number | Date
  placeholder?: string
  isDisabled?: boolean
  isRequired?: boolean
  onValueChange?: (value: string | number | string[] | Date, event?: SyntheticEvent) => void
  onErrors?: (errors: { [errorKey: string]: any }) => void
  onBlur?: (event?: SyntheticEvent) => void
  onFocus?: (event?: SyntheticEvent) => void
}
