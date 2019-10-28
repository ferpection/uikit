import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import { CheckboxButton } from '../src/components'

storiesOf('Components|Button/CheckboxButton', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('basic example', () => (
    <>
      <CheckboxButton>Test</CheckboxButton>
    </>
  ))
  .add('disabled state', () => (
    <>
      <CheckboxButton isDisabled>Test</CheckboxButton>
    </>
  ))
