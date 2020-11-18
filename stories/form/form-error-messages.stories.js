import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, object } from '@storybook/addon-knobs'

import { FormErrorMessages, UiKitInitializer } from '../../src/components/index.ts'

storiesOf('Components/Forms/FormErrorMessages', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('single error', () => (
    <UiKitInitializer>
      <FormErrorMessages errors={{ required: {} }} />
    </UiKitInitializer>
  ))
  .add('multiple errors', () => (
    <UiKitInitializer>
      <FormErrorMessages
        errors={object('errors', {
          required: {},
          notAnEmail: { value: 'this is not an email' },
        })}
      />
    </UiKitInitializer>
  ))
