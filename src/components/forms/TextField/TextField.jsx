import React, { useState } from 'react'

import { baseStyle, textareaStyle } from './styles'

export const TextField = (props) => {
  const [value, setValue] = useState('')
  const { dataType = 'text', rowCount = 1, children } = props

  return (
    <>
      {rowCount < 2 ? (
        <input
          type={dataType}
          css={[baseStyle]}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={children}
        />
      ) : null}
      {rowCount >= 2 ? (
        <textarea
          css={[baseStyle, textareaStyle]}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={children}
          rows={rowCount}
        />
      ) : null}
    </>
  )
}
