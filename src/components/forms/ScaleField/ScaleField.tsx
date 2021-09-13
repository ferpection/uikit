import { FormProps } from '../form-props'
import { baseStyles } from './styles'

interface ScaleFieldProps extends FormProps {
  value?: number
  range?: [number, number]
}

export function ScaleField(props: ScaleFieldProps) {
  const { value = 5, range: [minValue = 0, maxValue = 10] = [] } = props

  const choices = Array.from({ length: (maxValue - minValue) + 1 }, (_, i) => minValue + i)

  return (
    <div css={[baseStyles]}>
      {choices.map(choice => <div>{choice}.</div>)}
    </div>
  )
}
