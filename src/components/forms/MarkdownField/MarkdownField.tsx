import { useState, useEffect, SyntheticEvent } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Button } from '../../buttons/Button/Button'

import { TextField, TextFieldProps } from '../TextField/TextField'
import { defaultFormProps } from '../form-props'

import { textStyle, iconBar, container, buttonStyle, disabledStyle, helpButtonStyle } from './styles'
import { useTheme } from '../../../hooks/useTheme'

interface SelectionData {
  startIndex: number
  endIndex: number
  textBefore?: string
  selectedText?: string
  textAfter?: string
}

export interface MarkdownFieldProps extends TextFieldProps {
  className?: string
  onSelect?: (event?: SyntheticEvent) => void
}

export function MarkdownField(props: MarkdownFieldProps) {
  const { className, rowCount = 3, isDisabled, onValueChange = () => {}, value: externalValue, onSelect } = props
  const theme = useTheme()
  const [value, setValue] = useState(externalValue || '')
  const [selection, setSelection] = useState<SelectionData>({
    startIndex: 0,
    endIndex: 0,
  })

  useEffect(() => {
    setValue(externalValue || '')
  }, [externalValue])

  const handleSurroundSelectedText = ([startTag, endTag]: [string, string] = ['', ''], event: SyntheticEvent) => {
    const { textBefore = '', selectedText = '', textAfter = '' } = selection
    const updatedText = `${textBefore}${startTag}${selectedText}${endTag}${textAfter}`

    setValue(updatedText)
    onValueChange(updatedText, event)
  }

  const handleSelection = (event: SyntheticEvent<Element, Event>): void => {
    const textarea = event.target as HTMLTextAreaElement
    const selection: SelectionData = {
      startIndex: textarea.selectionStart,
      endIndex: textarea.selectionEnd,
    }

    if (selection.startIndex !== 0) {
      selection.textBefore = textarea.value.substring(0, selection.startIndex)
    }

    if (selection.endIndex !== textarea.value.length) {
      selection.textAfter = textarea.value.substring(selection.endIndex, textarea.value.length)
    }

    if (selection.startIndex === selection.endIndex) {
      setSelection(selection)
      onSelect(event)
      return
    }

    selection.selectedText = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd)

    setSelection(selection)
    onSelect(event)
  }

  const isTextSelected = selection.selectedText != null && selection.selectedText.length > 0

  return (
    <div className={className} css={[container]}>
      <div css={[iconBar, isDisabled && disabledStyle]}>
        <button
          css={[buttonStyle(theme), (isDisabled || !isTextSelected) && disabledStyle]}
          disabled={isDisabled || !isTextSelected}
          onClick={event => handleSurroundSelectedText(['**', '**'], event)}
        >
          <FontAwesomeIcon icon="bold" />
        </button>
        <button
          css={[buttonStyle(theme), (isDisabled || !isTextSelected) && disabledStyle]}
          disabled={isDisabled || !isTextSelected}
          onClick={event => handleSurroundSelectedText(['_', '_'], event)}
        >
          <FontAwesomeIcon icon="italic" />
        </button>
        <Button
          css={helpButtonStyle}
          icon="question-circle"
          to="https://www.markdownguide.org/cheat-sheet/"
          isDisabled={isDisabled}
          isRaw
        />
      </div>
      <TextField
        css={[textStyle]}
        {...props}
        rowCount={rowCount}
        value={value}
        onValueChange={(value, event) => {
          setValue(value)
          onValueChange(value, event)
        }}
        onSelect={handleSelection}
      />
    </div>
  )
}

MarkdownField.defaultProps = {
  ...(defaultFormProps as MarkdownFieldProps),
  onSelect: () => {},
  isHighlighted: false,
}
