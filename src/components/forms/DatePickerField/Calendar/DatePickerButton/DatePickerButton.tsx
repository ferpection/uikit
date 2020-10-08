/** @jsx jsx */
import { jsx } from '@emotion/core'

import { PickerButton, PickerButtonProps } from '../../PickerButton/PickerButton'

import { cicleButton } from './styles'

export function DatePickerButton(props: PickerButtonProps) {
  return <PickerButton css={[cicleButton]} {...props} />
}
