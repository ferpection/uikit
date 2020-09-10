/** @jsx jsx */
import { useState, useRef, MutableRefObject } from 'react'
import { jsx } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { TextField, TextFieldProps } from '../TextField/TextField'

import { textStyle, iconBar, container, buttonStyle, disabledStyle } from './styles'

export interface MarkdownFieldProps extends TextFieldProps {}

export function MarkdownField(props: MarkdownFieldProps) {
  const { rowCount = 3, isDisabled } = props
  const [value, setValue] = useState('')
  const textarea = useRef<HTMLTextAreaElement>()

  return (
    <div css={[container]}>
      <div css={[iconBar, isDisabled && disabledStyle]}>
        <button
          css={[buttonStyle, isDisabled && disabledStyle]}
          disabled={isDisabled}
          onClick={() => {
            const updatedText = surroundSelectedText(textarea, ['**', '**'])
            setValue(updatedText)
          }}
        >
          <FontAwesomeIcon icon="bold" />
        </button>
        <button
          css={[buttonStyle, isDisabled && disabledStyle]}
          disabled={isDisabled}
          onClick={() => {
            const updatedText = surroundSelectedText(textarea, ['_', '_'])
            setValue(updatedText)
          }}
        >
          <FontAwesomeIcon icon="italic" />
        </button>
      </div>
      <TextField
        css={[textStyle]}
        ref={textarea}
        {...props}
        rowCount={rowCount}
        value={value}
        onValueChange={value => setValue(value)}
      />
    </div>
  )
}

function surroundSelectedText(
  textarea: MutableRefObject<HTMLTextAreaElement>,
  [startTag, endTag]: [string, string] = ['', ''],
) {
  const startIndex = textarea.current.selectionStart
  const endIndex = textarea.current.selectionEnd
  const text = textarea.current.value
  const selectedText = text.substring(startIndex, endIndex)

  const startText = startIndex === 0 ? '' : text.substring(0, startIndex)
  const endText = endIndex === text.length ? '' : text.substring(endIndex, text.length)

  return `${startText}${startTag}${selectedText}${endTag}${endText}`
}
