import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import { RadioButton, TextField } from '../src/components'

storiesOf('Components|Button/RadioButton', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('basic example', () => (
    <>
      <RadioButton>Test</RadioButton>
    </>
  ))
  .add('disabled state', () => (
    <>
      <RadioButton isDisabled>Test</RadioButton>
    </>
  ))
  .add('sub component', () => (
    <>
      <RadioButton isDisabled>Test: <TextField /></RadioButton>
    </>
  ))
