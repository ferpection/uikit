import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, object } from '@storybook/addon-knobs'

import { FormErrorMessages } from '../src/components/index.ts'

storiesOf('Components|Forms/FormErrorMessages', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('single error', () => (
    <>
      <FormErrorMessages errors={{ required: true }} />
    </>
  ))
  .add('multiple errors', () => (
    <>
      <FormErrorMessages
        errors={object('errors', {
          required: true,
          notAnEmail: { value: 'this is not an email' },
          notAnError: false,
        })}
      />
    </>
  ))
