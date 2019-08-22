import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, text } from '@storybook/addon-knobs'

import { TextField } from '../src/components/index.js'

storiesOf('Components|Forms/TextField', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <TextField>
      {text('label', 'Action')}
    </TextField>
  ))
