import { action } from '@storybook/addon-actions'

import { MarkdownField, UiKitInitializer } from '../../src/components/index.ts'

export default {
  title: 'Components/Forms/MarkdownField',
  component: MarkdownField,
  decorators: [],
}

export const NormalState = args => {
  return (
    <UiKitInitializer>
      <MarkdownField onValueChange={value => action('Value changed', value)} {...args} />
    </UiKitInitializer>
  )
}

export const HighlightedState = args => {
  return (
    <UiKitInitializer>
      <MarkdownField {...args} />
    </UiKitInitializer>
  )
}

HighlightedState.args = { isHighlighted: true }

export const ErrorState = args => {
  return (
    <UiKitInitializer>
      <MarkdownField {...args} />
    </UiKitInitializer>
  )
}

ErrorState.args = { isRequired: true }

export const DisabledState = args => {
  return (
    <UiKitInitializer>
      <MarkdownField {...args} />
    </UiKitInitializer>
  )
}

DisabledState.args = { isDisabled: true }
