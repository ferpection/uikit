import { action } from '@storybook/addon-actions'

import { PlaceholderButton, UiKitInitializer } from '../../src/components/index.ts'

export default {
  title: 'Components/Button/PlaceholderButton',
  component: PlaceholderButton,
}

export const NormalState = args => {
  return (
    <UiKitInitializer>
      <PlaceholderButton {...args} onClick={action('clicked')} />
    </UiKitInitializer>
  )
}

NormalState.args = {
  children: 'Add an element',
  isDisabled: false,
}
