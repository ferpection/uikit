import React, { useState } from 'react'

import { baseStyle, textareaStyle, disabledStyle, highlightedStyle } from './styles'

export const TextField = (props) => {
  const [value, setValue] = useState('')
  const {
    dataType = 'text',
    rowCount = 1,
    children,
    isDisabled,
    isHighlighted,
  } = props

  return (
    <>
      {rowCount < 2 ? (
        <input
          type={dataType}
          css={[
            baseStyle,
            isHighlighted && highlightedStyle,
            isDisabled && disabledStyle,
          ]}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={children}
          disabled={isDisabled}
        />
      ) : null}
      {rowCount >= 2 ? (
        <textarea
          css={[
            baseStyle,
            textareaStyle,
            isHighlighted && highlightedStyle,
            isDisabled && disabledStyle,
          ]}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={children}
          rows={rowCount}
          disabled={isDisabled}
        />
      ) : null}
    </>
  )
}
