/** @jsx jsx */
import { jsx } from '@emotion/core'

import { FormProps } from '../form-props'

import { baseStyle, placeholder as placeholderStyle, button, hiddenInput, highlightedStyle, disabledStyle, placeholderDisabledStyle, buttonDisabledStyle } from './styles'

export function FileField(props: FileFieldProps) {
  const { isDisabled, placeholder = 'Choose a file...', isHighlighted } = props

  return (
    <label>
      <input css={[hiddenInput]} type="file" disabled={isDisabled} />
      <div css={[baseStyle, isHighlighted && highlightedStyle, isDisabled && disabledStyle]}>
        <div css={[placeholderStyle, isDisabled && placeholderDisabledStyle]}>{placeholder}</div>
        <div css={[button, isDisabled && buttonDisabledStyle]} role="button">Browse</div>
      </div>
    </label>
  )
}

export interface FileFieldProps extends FormProps {
  isHighlighted?: boolean
}
