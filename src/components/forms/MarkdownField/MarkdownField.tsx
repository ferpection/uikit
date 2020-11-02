/** @jsx jsx */
import { useState, useRef, MutableRefObject, useEffect } from 'react'
import { jsx } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { TextField, TextFieldProps } from '../TextField/TextField'

import { textStyle, iconBar, container, buttonStyle, disabledStyle } from './styles'
import { defaultFormProps } from '../form-props'

function surroundSelectedText(
  textarea: MutableRefObject<HTMLTextAreaElement>,
  [startTag, endTag]: [string, string] = ['', ''],
) {
  const startIndex = textarea.current.selectionStart
  const endIndex = textarea.current.selectionEnd
  const text = textarea.current.value
  const selectedText = text.substring(startIndex, endIndex)

  if (startIndex === endIndex) {
    return text
  }

  const startText = startIndex === 0 ? '' : text.substring(0, startIndex)
  const endText = endIndex === text.length ? '' : text.substring(endIndex, text.length)

  return `${startText}${startTag}${selectedText}${endTag}${endText}`
}

export interface MarkdownFieldProps extends TextFieldProps {
  className?: string
}

export function MarkdownField(props: MarkdownFieldProps) {
  const { className, rowCount = 3, isDisabled, onValueChange = () => {}, value: externalValue } = props
  const [value, setValue] = useState(externalValue || '')
  const textarea = useRef<HTMLTextAreaElement>()

  useEffect(() => {
    setValue(externalValue || '')
  }, [externalValue])

  return (
    <div className={className} css={[container]}>
      <div css={[iconBar, isDisabled && disabledStyle]}>
        <button
          css={[buttonStyle, isDisabled && disabledStyle]}
          disabled={isDisabled}
          onClick={event => {
            const updatedText = surroundSelectedText(textarea, ['**', '**'])
            setValue(updatedText)
            onValueChange(updatedText, event)
          }}
        >
          <FontAwesomeIcon icon="bold" />
        </button>
        <button
          css={[buttonStyle, isDisabled && disabledStyle]}
          disabled={isDisabled}
          onClick={event => {
            const updatedText = surroundSelectedText(textarea, ['_', '_'])
            setValue(updatedText)
            onValueChange(updatedText, event)
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
        onValueChange={(value, event) => {
          setValue(value)
          onValueChange(value, event)
        }}
      />
    </div>
  )
}

MarkdownField.defaultProps = {
  ...(defaultFormProps as MarkdownFieldProps),
}
