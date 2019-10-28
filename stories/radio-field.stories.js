import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import { RadioField, RadioButton } from '../src/components'

storiesOf('Components|Forms/RadioField', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('basic example', () => (
    <>
      <RadioField>
        <RadioButton>Choice One</RadioButton>
        <RadioButton>Choice Two</RadioButton>
      </RadioField>
    </>
  ))
  .add('disabled state', () => (
    <>
      <RadioField isDisabled>Test</RadioField>
    </>
  ))
