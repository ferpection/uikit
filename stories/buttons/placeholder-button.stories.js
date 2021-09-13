import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
      <section style={{ display: 'flex', flexDirection: 'column', padding: '5px 0' }}>
        <PlaceholderButton {...args} onClick={action('clicked')} />
      </section>
    </UiKitInitializer>
  )
}

NormalState.args = {
  children: 'Add an element',
  isDisabled: false,
}

export const WithJSXChildren = args => {
  return (
    <UiKitInitializer>
      <PlaceholderButton {...args} onClick={action('clicked')} />
    </UiKitInitializer>
  )
}

WithJSXChildren.args = {
  children: (
    <>
      <FontAwesomeIcon icon="align-left" /> Add text
    </>
  ),
}
