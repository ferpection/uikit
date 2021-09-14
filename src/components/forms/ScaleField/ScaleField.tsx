import { useState, useEffect } from 'react'

import { defaultFormProps, FormProps } from '../form-props'
import { baseStyles, itemStyles } from './styles'

interface ScaleFieldProps extends FormProps {
  value?: number
  range?: [number, number]
  placeholder?: never
  onValueChange?: (value: number) => void
}

export function ScaleField(props: ScaleFieldProps) {
  const { value: initialValue, range: [minValue = 0, maxValue = 10] = [], onValueChange = () => {} } = props
  const choices = Array.from({ length: (maxValue - minValue) + 1 }, (_, i) => minValue + i)

  const [value, setValue] = useState(initialValue)

  useEffect(() => setValue(initialValue), [initialValue])
  useEffect(() => onValueChange(value), [value])

  return (
    <div css={[baseStyles]}>
      {choices.map(choice => <div css={[itemStyles({ selected: choice === value, quantity: choices.length })]} onClick={() => setValue(choice)}>{choice}</div>)}
    </div>
  )
}

ScaleField.defaultProps = {
  ...defaultFormProps,
  range: [1, 10],
  value: undefined,
  placeholder: undefined,
}
