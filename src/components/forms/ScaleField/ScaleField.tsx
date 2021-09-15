import { useState, useEffect } from 'react'
import useFormValidation from '../../../hooks/useFormValidation'

import { useTheme } from '../../../hooks/useTheme'
import { defaultFormProps, FormProps } from '../form-props'

import { baseStyles, errorBaseStyles, itemStyles } from './styles'

interface ScaleFieldProps extends FormProps {
  value?: number
  range?: [number, number]
  placeholder?: never
  onValueChange?: (value: number) => void
}

export function ScaleField(props: ScaleFieldProps) {
  const {
    value: initialValue,
    range: [minValue = 0, maxValue = 10] = [],
    validators = [],
    isDisabled = false,
    isRequired = false,
    onValueChange = () => {},
  } = props
  const choices = Array.from({ length: maxValue - minValue + 1 }, (_, i) => minValue + i)

  const theme = useTheme()
  const [value, setValue] = useState(initialValue)
  const { isValid } = useFormValidation(
    value,
    [(v: number) => ({ 'uikit:required': isRequired && (v == null || isNaN(v)) }), ...validators],
    false,
  )

  useEffect(() => setValue(initialValue), [initialValue])
  useEffect(() => onValueChange(value), [value])

  return (
    <div css={[baseStyles]}>
      {choices.map(choice => (
        <button
          key={choice}
          css={[itemStyles(theme), errorBaseStyles(theme)]}
          data-selected={choice === value}
          data-error={!isValid}
          disabled={isDisabled}
          onClick={() => setValue(choice)}
        >
          {choice}
        </button>
      ))}
    </div>
  )
}

ScaleField.defaultProps = {
  ...defaultFormProps,
  range: [1, 10],
  value: undefined,
  placeholder: undefined,
}
