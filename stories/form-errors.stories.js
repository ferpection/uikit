import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, object } from '@storybook/addon-knobs'

import { FormErrors } from '../src/components/index.js'

storiesOf('Components|Forms/FormErrors', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('single error', () => (
    <>
      <FormErrors errors={{ required: {} }} />
    </>
  ))
  .add('multiple errors', () => (
    <>
      <FormErrors
        errors={object('errors', {
          required: {},
          notAnEmail: { value: 'this is not an email' },
        })}
      />
    </>
  ))
