import React, { useState, useRef, MutableRefObject } from 'react'

import { TextField, TextFieldProps } from '../TextField/TextField'
import { Button } from '../../buttons/Button/Button'

export function MarkdownField(props: MarkdownFieldProps) {
  const { rowCount = 3 } = props
  const [value, setValue] = useState('')
  const textarea = useRef<HTMLTextAreaElement>()

  return (
    <>
      <Button
        icon="bold"
        onClick={() => {
          const updatedText = surroundSelectedText(textarea, ['**', '**'])
          setValue(updatedText)
        }}
      />
      <Button
        icon="italic"
        onClick={() => {
          const updatedText = surroundSelectedText(textarea, ['_', '_'])
          setValue(updatedText)
        }}
      />
      <TextField ref={textarea} {...props} rowCount={rowCount} value={value} onValueChange={value => setValue(value)} />
    </>
  )
}

export interface MarkdownFieldProps extends TextFieldProps {}

function surroundSelectedText(textarea: MutableRefObject<HTMLTextAreaElement>, [startTag, endTag]: [string, string] = ['', '']) {
  const startIndex = textarea.current.selectionStart
  const endIndex = textarea.current.selectionEnd
  const text = textarea.current.value
  const selectedText = text.substring(startIndex, endIndex)

  let startText = startIndex === 0
    ? ''
    : text.substring(0, startIndex)
  let endText = endIndex === text.length
    ? ''
    : text.substring(endIndex, text.length)

  return `${startText}${startTag}${selectedText}${endTag}${endText}`
}
