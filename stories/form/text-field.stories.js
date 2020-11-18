import React, { useState } from 'react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, text, number, boolean, select } from '@storybook/addon-knobs'

import { TextField, UiKitInitializer } from '../../src/components/index.ts'

export default {
  title: 'Components/Forms/TextField',
  component: TextField,
  decorators: [withA11y, withKnobs],
}

export const NormalState = () => {
  return (
    <UiKitInitializer>
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
    </UiKitInitializer>
  )
}

export const HighlightedState = () => {
  return (
    <UiKitInitializer>
      <TextField placeholder="This is a highlighted input" isHighlighted />
      <TextField rowCount={3} placeholder="This is a highlighted textarea" isHighlighted />
    </UiKitInitializer>
  )
}

const MAX_LENGTH = 3
export const ErrorState = () => {
  const [value, setValue] = useState('')
  const [errors, setErrors] = useState({})

  return (
    <UiKitInitializer>
      <TextField
        placeholder="This is a error input"
        dataType="number"
        hideErrors={boolean('hide errors', false)}
        isRequired
      />
      <TextField
        rowCount={3}
        placeholder="This is a error textarea"
        dataType="email"
        hideErrors={boolean('hide errors', false)}
      />
      <h3>With custom validation</h3>
      It is possible to add custom validators to the exsiting ones. They are ran at the same time.
      <pre>{JSON.stringify(errors, null, 2)}</pre>
      <TextField
        placeholder="This is a error input"
        dataType="text"
        value={value}
        onValueChange={value => setValue(value)}
        hideErrors={boolean('hide errors', false)}
        onErrors={err => setErrors(err)}
        validators={[
          v => ({ 'customError:maxLenght': v.length > MAX_LENGTH && { length: v.length, max: MAX_LENGTH } }),
        ]}
        isRequired
      />
    </UiKitInitializer>
  )
}

export const DisabledState = () => {
  return (
    <UiKitInitializer>
      <TextField placeholder="This is a disabled input" isDisabled />
      <TextField rowCount={3} placeholder="This is a disabled textarea" isDisabled />
    </UiKitInitializer>
  )
}

export const FullExample = () => {
  return (
    <UiKitInitializer>
      <TextField
        placeholder={text('placeholder', 'Fill the field')}
        dataType={select('data type', ['text', 'email', 'number'])}
        rowCount={number('row count', 1)}
        isHighlighted={boolean('highlighted', false)}
        isDisabled={boolean('disabled', false)}
        isSmall={boolean('is small', false)}
        hideErrors={boolean('hide errors', false)}
      />
    </UiKitInitializer>
  )
}
