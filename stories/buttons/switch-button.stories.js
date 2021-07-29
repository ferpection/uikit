import { withA11y } from '@storybook/addon-a11y'

import { UiKitInitializer, SwitchButton } from '../../src/components'

export default {
  title: 'Components/Button/SwitchButton',
  component: SwitchButton,
  decorators: [withA11y],
}

export const BasicExample = args => {
  return (
    <UiKitInitializer>
      <SwitchButton {...args} onValueChange={event => console.log(event.target.value, event.target.checked)}>
        Test
      </SwitchButton>
    </UiKitInitializer>
  )
}
