import React, { useState, useEffect } from 'react'

import { baseStyle, textareaStyle, disabledStyle, highlightedStyle, errorStyle } from './styles'

const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const TextField = (props) => {
  const {
    dataType = 'text',
    rowCount = 1,
    children,
    isDisabled,
    isHighlighted,
    value: initialValue = '',
  } = props

  const [value, setValue] = useState(initialValue)
  const [errorMessages, setErrorMessages] = useState({})
  const isNotValid = Object.keys(errorMessages).length > 0

  useEffect(() => {
    setValue(value)

    if (dataType === 'email' && !EMAIL_REGEXP.test(value)) {
      setErrorMessages({
        emailInvalid: { value },
      })

      return
    }

    setErrorMessages({})
  }, [value])

  return (
    <>
      {rowCount < 2 ? (
        <input
          type={dataType}
          css={[
            baseStyle,
            isHighlighted && highlightedStyle,
            isNotValid && errorStyle,
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
            isNotValid && errorStyle,
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
