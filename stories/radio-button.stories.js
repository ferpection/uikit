import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import { RadioButton } from '../src/components'

storiesOf('Components|Button/RadioButton', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('single error', () => (
    <>
      <RadioButton label="Test"/>
    </>
  ))
