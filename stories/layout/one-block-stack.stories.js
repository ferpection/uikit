import React from 'react'
import styled from '@emotion/styled'

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

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

export default {
  title: 'Components/Layout/OneBlockStack',
  component: OneBlockStack,
  argTypes: {
    onFocus: { action: 'focused' },
    onBlur: { action: 'blured' },
  },
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
        <StyledDiv>
          <div>
            <CheckboxButton>Option 1</CheckboxButton>
            <CheckboxButton isChecked>Option 2</CheckboxButton>
            <CheckboxButton>Option 3</CheckboxButton>
          </div>
          <div>
            <CheckboxButton isChecked />
          </div>
        </StyledDiv>
        <section>
          <p>This is a section w/ buttons</p>
          <Button>OK</Button>
        </section>
      </OneBlockStack>
    </UiKitInitializer>
  )
}
