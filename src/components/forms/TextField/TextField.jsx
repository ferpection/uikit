import React, { useState } from 'react'

import { baseStyle, textareaStyle, disabledStyle } from './styles'

export const TextField = (props) => {
  const [value, setValue] = useState('')
  const { dataType = 'text', rowCount = 1, children, isDisabled } = props

  return (
    <>
      {rowCount < 2 ? (
        <input
          type={dataType}
          css={[
            baseStyle,
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
