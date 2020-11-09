import React from 'react'

import { withA11y } from '@storybook/addon-a11y'

import { CheckboxButton, TextField, DatePickerField, UiKitInitializer } from '../src/components'

export default {
  title: 'Components/Button/CheckboxButton',
  component: CheckboxButton,
  decorators: [withA11y],
}

export const BasicExample = (args) => {
  return (
    <UiKitInitializer>
      <CheckboxButton {...args}>Test</CheckboxButton>
    </UiKitInitializer>
  )
}

export const DisabledState = (args) => {
  return (
    <UiKitInitializer>
      <CheckboxButton {...args} isDisabled>Test</CheckboxButton>
    </UiKitInitializer>
  )
}

export const SubComponents = ({innerFieldIsSmall, ...args}) => {
  return (
    <UiKitInitializer>
      <h3>With text</h3>
      <CheckboxButton {...args}>
        Id culpa reprehenderit enim nisi et reprehenderit voluptate. Laborum deserunt tempor culpa id anim dolor duis
        sint consectetur mollit dolore magna voluptate. Deserunt consectetur velit ullamco irure reprehenderit mollit
        mollit irure ea non. Commodo enim esse esse fugiat proident reprehenderit exercitation proident qui ex duis
        duis. Veniam ex non voluptate eu laboris sit aute incididunt incididunt velit sunt aute. Nisi ea proident
        consequat laborum aliquip ullamco magna. Velit pariatur sit do minim dolore occaecat tempor mollit deserunt
        mollit. Qui eiusmod anim duis occaecat ex duis et do irure irure eu veniam eiusmod.
      </CheckboxButton>
      <h3>With {TextField.name}</h3>
      <CheckboxButton {...args}>
        <TextField isSmall={innerFieldIsSmall} />
      </CheckboxButton>
      <h3>With text and {TextField.name}</h3>
      <CheckboxButton {...args}>
        Test: <TextField isSmall={innerFieldIsSmall} />
      </CheckboxButton>
      <h3>With text and {DatePickerField.name}</h3>
      <CheckboxButton {...args}>
        Test: <DatePickerField isSmall={innerFieldIsSmall} />
      </CheckboxButton>
    </UiKitInitializer>
  )
}

SubComponents.args = {
  innerFieldIsSmall: false
}

SubComponents.argTypes = {
  innerFieldIsSmall: { control: { type: 'boolean' } }
}
