import { useState, useEffect } from 'react'

import { FormProps } from '../form-props'
import { baseStyles } from './styles'

interface ScaleFieldProps extends FormProps {
  value?: number
  range?: [number, number]
  onValueChange?: (value: number) => void
}

export function ScaleField(props: ScaleFieldProps) {
  const { value: initialValue = 5, range: [minValue = 0, maxValue = 10] = [], onValueChange = () => {} } = props
  const choices = Array.from({ length: (maxValue - minValue) + 1 }, (_, i) => minValue + i)

  const [value, setValue] = useState(initialValue)

  useEffect(() => setValue(initialValue), initialValue)
  useEffect(() => onValueChange(value), value)

  return (
    <div css={[baseStyles]}>
      {choices.map(choice => <div onClick={() => setValue(choice)}>{choice}.</div>)}
    </div>
  )
}
