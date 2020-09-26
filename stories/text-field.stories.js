import React, { useState, useEffect } from 'react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, text, number, boolean, select } from '@storybook/addon-knobs'

import { TextField } from '../src/components/index.ts'

export default {
  title: 'Components/Forms/TextField',
  component: TextField,
  decorators: [withA11y, withKnobs],
}

export const NormalState = () => {
  return (
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
  )
}

export const HighlightedState = () => {
  return (
    <>
      <TextField placeholder="This is a highlighted input" isHighlighted />
      <TextField rowCount={3} placeholder="This is a highlighted textarea" isHighlighted />
    </>
  )
}

export const ErrorState = () => {
  const [value, setValue] = useState('')
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (value.length > 3) {
      setErrors({
        ...errors,
        'customError:maxLenght': {
          length: value.length,
          max: 3,
        }
      })

      return
    }

    setErrors({ ...errors, 'customError:maxLenght': false })
  }, [value])

  return (
    <>
      <TextField placeholder="This is a error input" dataType="number" hideErrors={boolean('hide errors', false)} isRequired />
      <TextField rowCount={3} placeholder="This is a error textarea" dataType="email" hideErrors={boolean('hide errors', false)} />
      <h3>With custom error</h3>
      Errors processed outside of the component:
      <pre>
        {JSON.stringify(errors, null, 4)}
      </pre>
      <TextField
        placeholder="This is a error input"
        dataType="text"
        value={value}
        onValueChange={value => setValue(value)}
        errors={errors}
        hideErrors={boolean('hide errors', false)}
        // onErrors={err => setErrors(err)}
        isRequired
      />
    </>
  )
}

export const DisabledState = () => {
  return (
    <>
      <TextField placeholder="This is a disabled input" isDisabled />
      <TextField rowCount={3} placeholder="This is a disabled textarea" isDisabled />
    </>
  )
}

export const FullExample = () => {
  return (
    <TextField
      placeholder={text('placeholder', 'Fill the field')}
      dataType={select('data type', ['text', 'email', 'number'])}
      rowCount={number('row count', 1)}
      isHighlighted={boolean('highlighted', false)}
      isDisabled={boolean('disabled', false)}
      isSmall={boolean('is small', false)}
      hideErrors={boolean('hide errors', false)}
    />
  )
}
