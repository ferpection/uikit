/** @jsx jsx */
import { jsx } from '@emotion/core'

import { FormProps } from '../form-props'

import { baseStyle, placeholder as placeholderStyle, button, hiddenInput } from './styles'

export function FileField(props: FileFieldProps) {
  const { isDisabled, placeholder = 'Choose a file...' } = props

  return (
    <label>
      <input css={[hiddenInput]} type="file" disabled={isDisabled} />
      <div css={[baseStyle]}>
        <div css={[placeholderStyle]}>{placeholder}</div>
        <div css={[button]}>Browse</div>
      </div>
    </label>
  )
}

export interface FileFieldProps extends FormProps {}
