import React from 'react'

import { baseStyle, placehoderStyle, highlightedStyle, disabledStyle, errorStyle } from './styles'

export const SelectField = (props) => {
  const { placeholder, isHighlighted, isDisabled } = props
  const isValid = true

  return (
    <select
      css={[
        baseStyle,
        isHighlighted && highlightedStyle,
        !isValid && errorStyle,
        isDisabled && disabledStyle,
      ]}
      disabled={isDisabled}
    >
      <option css={[placehoderStyle]} disabled selected>{placeholder}</option>
    </select>
  )
}
