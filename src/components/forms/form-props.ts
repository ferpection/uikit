export interface FormProps {
  value: string
  placeholder: string
  isDisabled: boolean
  isRequired: boolean
  onValueChange: (value: string) => void
  onErrors: (errors: { [errorKey: string]: any }) => void
}
