import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import { MarkdownField, UiKitInitializer } from '../src/components/index.ts'

export default {
  title: 'Components/Forms/MarkdownField',
  component: MarkdownField,
  decorators: [withKnobs],
}

export const NormalState = () => {
  return <UiKitInitializer><MarkdownField value={text('value')} onValueChange={value => console.log(value)} /></UiKitInitializer>
}

export const HighlightedState = () => {
  return <UiKitInitializer><MarkdownField isHighlighted /></UiKitInitializer>
}

export const ErrorState = () => {
  return <UiKitInitializer><MarkdownField isRequired /></UiKitInitializer>
}

export const DisabledState = () => {
  return <UiKitInitializer><MarkdownField isDisabled /></UiKitInitializer>
}
