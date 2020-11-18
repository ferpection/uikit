import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import { PlaceholderButton, UiKitInitializer } from '../../src/components/index.ts'

storiesOf('Components/Button/PlaceholderButton', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('normal state', () => (
    <UiKitInitializer>
      <PlaceholderButton onClick={action('clicked')} isDisabled={boolean('disabled', false)}>
        {text('label', 'Add an element')}
      </PlaceholderButton>
    </UiKitInitializer>
  ))
