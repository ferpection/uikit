import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, text, number, boolean, select } from '@storybook/addon-knobs'

import { TextField } from '../src/components/index.ts'

storiesOf('Components|Forms/TextField', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('normal state', () => (
    <>
      {boolean('show label', false) ? <label>Input:</label> : null}
      <TextField placeholder="This is an input" />
      {boolean('show label', false) ? (
        <>
          <br />
          <br />
          <label>Textarea:</label>
        </>
      ) : null}
      <TextField rowCount={3} placeholder="This is an textarea" />
    </>
  ))
  .add('highlighted state', () => (
    <>
      <TextField placeholder="This is a highlighted input" isHighlighted />
      <TextField rowCount={3} placeholder="This is a highlighted textarea" isHighlighted />
    </>
  ))
  .add('error state', () => (
    <>
      <TextField placeholder="This is a error input" dataType="email" />
      <TextField rowCount={3} placeholder="This is a error textarea" dataType="email" />
    </>
  ))
  .add('disabled state', () => (
    <>
      <TextField placeholder="This is a disabled input" isDisabled />
      <TextField rowCount={3} placeholder="This is a disabled textarea" isDisabled />
    </>
  ))
  .add('full example', () => (
    <TextField
      placeholder={text('placeholder', 'Fill the field')}
      dataType={select('data type', ['text', 'email'])}
      rowCount={number('row count', 1)}
      isHighlighted={boolean('highlighted', false)}
      isDisabled={boolean('disabled', false)}
      isSmall={boolean('is small', false)}
    />
  ))
