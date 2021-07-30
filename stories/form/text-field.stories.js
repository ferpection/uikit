import { useState } from 'react'
import { withA11y } from '@storybook/addon-a11y'

import { TextField, UiKitInitializer } from '../../src/components/index.ts'

export default {
  title: 'Components/Forms/TextField',
  component: TextField,
  decorators: [withA11y],
}

export const NormalState = args => {
  return (
    <UiKitInitializer>
      <TextField placeholder="This is an input" {...args} />
      <TextField rowCount={3} placeholder="This is a textarea" {...args} />
    </UiKitInitializer>
  )
}

export const HighlightedState = args => {
  return (
    <UiKitInitializer>
      <TextField placeholder="This is a highlighted input" {...args} />
      <TextField rowCount={3} placeholder="This is a highlighted textarea" {...args} />
    </UiKitInitializer>
  )
}

HighlightedState.args = { isHighlighted: true }

const MAX_LENGTH = 3
export const ErrorState = args => {
  const [value, setValue] = useState('')
  const [errors, setErrors] = useState({})

  return (
    <UiKitInitializer>
      <TextField placeholder="This is a error input" dataType="number" {...args} />
      <TextField rowCount={3} placeholder="This is a error textarea" dataType="email" {...args} />
      <h3>With custom validation</h3>
      It is possible to add custom validators to the exsiting ones. They are ran at the same time.
      <pre>{JSON.stringify(errors, null, 2)}</pre>
      <TextField
        placeholder="This is a error input"
        value={value}
        onValueChange={value => setValue(value)}
        onErrors={err => setErrors(err)}
        validators={[
          v => ({ 'customError:maxLenght': v.length > MAX_LENGTH && { length: v.length, max: MAX_LENGTH } }),
        ]}
        {...args}
      />
    </UiKitInitializer>
  )
}

ErrorState.args = { isRequired: true, hideErrors: false }

export const DisabledState = args => {
  return (
    <UiKitInitializer>
      <TextField placeholder="This is a disabled input" {...args} />
      <TextField rowCount={3} placeholder="This is a disabled textarea" {...args} />
    </UiKitInitializer>
  )
}

DisabledState.args = { isDisabled: true }
