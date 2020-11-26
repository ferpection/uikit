import React from 'react'

import { withA11y } from '@storybook/addon-a11y'

import {
  OneBlockStack,
  PlaceholderButton,
  TextField,
  DatePickerField,
  UiKitInitializer,
  CheckboxGroup,
  CheckboxButton,
  SelectField,
  MarkdownField,
  FileField,
  Button,
} from '../../src/components'

export default {
  title: 'Components/Layout/OneBlockStack',
  component: OneBlockStack,
  decorators: [withA11y],
}

export const MainExample = args => {
  return (
    <UiKitInitializer>
      <OneBlockStack {...args}>
        <TextField isSmall />
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
      </OneBlockStack>
    </UiKitInitializer>
  )
}

export const NonUiKitComponents = args => {
  return (
    <UiKitInitializer>
      <OneBlockStack {...args}>
        <div>
          <p>This a div w/ an input.</p>
          <TextField isSmall />
        </div>
        <p>
          <CheckboxButton>This is a paragraph w/ a checkbox</CheckboxButton>
        </p>
        <section>
          <p>This is a section w/ buttons</p>
          <Button>OK</Button>
        </section>
      </OneBlockStack>
    </UiKitInitializer>
  )
}