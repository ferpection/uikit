import { FormProps } from '../form-props'
import { baseStyles } from './styles'

interface ScaleFieldProps extends FormProps {
  value?: number
}

export function ScaleField(props: ScaleFieldProps) {
  const { value = 3 } = props
  const min = -6
  const max = 6

  const choices = Array.from({ length: (max - min) + 1 }, (_, k) => min + k)

  return (
    <div css={[baseStyles]}>
      {choices.map(choice => <div>{choice}.</div>)}
    </div>
  )
}
