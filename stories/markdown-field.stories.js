import React from 'react'
import { MarkdownField } from '../src/components/index.ts'

export default {
  title: 'Components/Forms/MarkdownField',
  component: MarkdownField,
}

export const NormalState = () => {
  return <MarkdownField onValueChange={value => console.log(value)} />
}

export const HighlightedState = () => {
  return <MarkdownField isHighlighted />
}

export const ErrorState = () => {
  return <MarkdownField isRequired />
}

export const DisabledState = () => {
  return <MarkdownField isDisabled />
}
