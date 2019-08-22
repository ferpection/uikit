import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, text, number, boolean, select } from '@storybook/addon-knobs'

import { TextField } from '../src/components/index.js'

storiesOf('Components|Forms/TextField', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('normal state', () => (
    <>
      <TextField>
        This is an input
      </TextField>
      <TextField rowCount={3}>
        This is an input
      </TextField>
    </>
  ))
  .add('highlighted state', () => (
    <>
      <TextField isHighlighted>
        This is a highlighted input
      </TextField>
      <TextField rowCount={3} isHighlighted>
        This is a highlighted input
      </TextField>
    </>
  ))
  .add('error state', () => (
    <>
      <TextField dataType="email" value="This is not an email">
        This is a error input
      </TextField>
      <TextField rowCount={3} dataType="email" value="This isn't too">
        This is a error input
      </TextField>
    </>
  ))
  .add('disabled state', () => (
    <>
      <TextField isDisabled>
        This is a disabled input
      </TextField>
      <TextField rowCount={3} isDisabled>
        This is a disabled input
      </TextField>
    </>
  ))
  .add('full example', () => (
    <TextField
      dataType={select('data type', ['text', 'email'])}
      rowCount={number('row count', 1)}
      isDisabled={boolean('disabled', false)}
      isHighlighted={boolean('highlighted', false)}
    >
      {text('placeholder', 'Fill the field')}
    </TextField>
  ))
