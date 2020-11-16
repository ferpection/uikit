import React from 'react'

import { withA11y } from '@storybook/addon-a11y'

import { FieldStack, PlaceholderButton, TextField, DatePickerField, UiKitInitializer, CheckboxGroup, CheckboxButton, SelectField, MarkdownField, FileField } from '../src/components'

export default {
  title: 'Components/Layout/FieldStack',
  component: FieldStack,
  decorators: [withA11y],
}

export const BasicExample = (args) => {
  return (
    <UiKitInitializer>
      <FieldStack {...args}>
        <TextField />
        <DatePickerField />
        <TextField rowCount={3} />
        <CheckboxGroup>
          <CheckboxButton value={1}>Option 1</CheckboxButton>
          <CheckboxButton value={2}>Option 2</CheckboxButton>
          <CheckboxButton value={3}>Option 3</CheckboxButton>
        </CheckboxGroup>
        <SelectField>
          <option value="option 1">Option 1</option>
          <option value="option 2">Option 2</option>
          <option value="option 3">Option 3</option>
        </SelectField>
        <MarkdownField />
        <FileField />
        <PlaceholderButton>Add things here</PlaceholderButton>
      </FieldStack>
    </UiKitInitializer>
  )
}
