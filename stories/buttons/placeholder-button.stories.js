import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'

import { PlaceholderButton, UiKitInitializer } from '../../src/components/index.ts'

export default {
  title: 'Components/Button/PlaceholderButton',
  component: PlaceholderButton,
  decorators: [withA11y],
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
