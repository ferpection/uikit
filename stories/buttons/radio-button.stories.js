import React from 'react'

import { withA11y } from '@storybook/addon-a11y'

import { RadioButton, TextField, DatePickerField, UiKitInitializer } from '../../src/components'

export default {
  title: 'Components/Button/RadioButton',
  component: RadioButton,
  decorators: [withA11y],
}

export const BasicExample = args => {
  return (
    <UiKitInitializer>
      <RadioButton {...args}>Test</RadioButton>
    </UiKitInitializer>
  )
}

export const DisabledState = args => {
  return (
    <UiKitInitializer>
      <RadioButton {...args} isDisabled>
        Test
      </RadioButton>
    </UiKitInitializer>
  )
}

export const SubComponents = ({ innerFieldIsSmall, ...args }) => {
  return (
    <UiKitInitializer>
      <h3>With text</h3>
      <RadioButton {...args}>
        Id culpa reprehenderit enim nisi et reprehenderit voluptate. Laborum deserunt tempor culpa id anim dolor duis
        sint consectetur mollit dolore magna voluptate. Deserunt consectetur velit ullamco irure reprehenderit mollit
        mollit irure ea non. Commodo enim esse esse fugiat proident reprehenderit exercitation proident qui ex duis
        duis. Veniam ex non voluptate eu laboris sit aute incididunt incididunt velit sunt aute. Nisi ea proident
        consequat laborum aliquip ullamco magna. Velit pariatur sit do minim dolore occaecat tempor mollit deserunt
        mollit. Qui eiusmod anim duis occaecat ex duis et do irure irure eu veniam eiusmod.
      </RadioButton>
      <h3>With {TextField.name}</h3>
      <RadioButton {...args}>
        <TextField isSmall={innerFieldIsSmall} />
      </RadioButton>
      <h3>With text and {TextField.name}</h3>
      <RadioButton {...args}>
        Test: <TextField isSmall={innerFieldIsSmall} />
      </RadioButton>
      <h3>With text and {DatePickerField.name}</h3>
      <RadioButton {...args}>
        Test: <DatePickerField isSmall={innerFieldIsSmall} />
      </RadioButton>
    </UiKitInitializer>
  )
}

SubComponents.args = {
  innerFieldIsSmall: false,
}

SubComponents.argTypes = {
  innerFieldIsSmall: { control: { type: 'boolean' } },
}
