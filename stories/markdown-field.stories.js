import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs';

import { MarkdownField } from '../src/components/index.ts'

export default {
  title: 'Components/Forms/MarkdownField',
  component: MarkdownField,
  decorators: [withKnobs],
}

export const NormalState = () => {
  return <MarkdownField value={text('value')} onValueChange={value => console.log(value)} />
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
