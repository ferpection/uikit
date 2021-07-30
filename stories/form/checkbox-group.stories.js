import { action } from '@storybook/addon-actions'

import { CheckboxGroup, CheckboxButton, DatePickerField, TextField, UiKitInitializer } from '../../src/components'

export default {
  title: 'Components/Forms/CheckboxGroup',
  component: CheckboxGroup,
  args: {
    value: ['three'],
    onValueChange: () => action('value changed'),
  },
  argTypes: {
    validators: {
      control: {
        disable: true,
      },
    },
    placeholder: {
      table: {
        disable: true,
      },
    },
  },
}

export const BasicExemple = args => {
  return (
    <UiKitInitializer>
      <CheckboxGroup {...args}>
        <CheckboxButton value="one">Unique option</CheckboxButton>
      </CheckboxGroup>
      <CheckboxGroup {...args}>
        <CheckboxButton value="one">Choice One</CheckboxButton>
        <CheckboxButton value="two">Choice Two</CheckboxButton>
        <CheckboxButton value="three">Choice Three</CheckboxButton>
      </CheckboxGroup>
    </UiKitInitializer>
  )
}

export const SubComponent = args => {
  return (
    <UiKitInitializer>
      <h2>
        <code>TextField</code>
      </h2>
      <CheckboxGroup {...args}>
        <CheckboxButton value="one">Choice One</CheckboxButton>
        <CheckboxButton value="two">
          Choice Two: <TextField />
        </CheckboxButton>
        <CheckboxButton value="three">Choice Three</CheckboxButton>
      </CheckboxGroup>
      <h2>
        <code>{DatePickerField.name}</code>
      </h2>
      <CheckboxGroup {...args}>
        <CheckboxButton value="one">Choice One</CheckboxButton>
        <CheckboxButton value="two">
          Choice Two: <DatePickerField />
        </CheckboxButton>
        <CheckboxButton value="three">Choice Three</CheckboxButton>
      </CheckboxGroup>
      <h2>
        <code>Small {DatePickerField.name}</code>
      </h2>
      <CheckboxGroup {...args}>
        <CheckboxButton value="one">Choice One</CheckboxButton>
        <CheckboxButton value="two">
          Choice Two: <DatePickerField isSmall />
        </CheckboxButton>
        <CheckboxButton value="three">Choice Three</CheckboxButton>
      </CheckboxGroup>
      <h2>
        <code>
          {DatePickerField.name} within a <code>div</code>
        </code>
      </h2>
      <CheckboxGroup {...args}>
        <CheckboxButton value="one">Choice One</CheckboxButton>
        <CheckboxButton value="two">
          <div>
            Choice Two: <DatePickerField />
          </div>
        </CheckboxButton>
        <CheckboxButton value="three">Choice Three</CheckboxButton>
      </CheckboxGroup>
    </UiKitInitializer>
  )
}

export const ErrorState = args => {
  return (
    <UiKitInitializer>
      <CheckboxGroup onValueChange={action('value changed')} onErrors={action('errors thrown')} {...args}>
        <CheckboxButton value="one">Choice One</CheckboxButton>
        <CheckboxButton value="two">Choice Two</CheckboxButton>
        <CheckboxButton value="three">Choice Three</CheckboxButton>
      </CheckboxGroup>
    </UiKitInitializer>
  )
}

ErrorState.args = { isRequired: true }

export const DisabledState = args => {
  return (
    <UiKitInitializer>
      <h2>
        <code>isDisabled</code> on <code>{CheckboxGroup.name}</code>
      </h2>
      <CheckboxGroup {...args}>
        <CheckboxButton value="one">Choice One</CheckboxButton>
        <CheckboxButton value="two">Choice Two</CheckboxButton>
        <CheckboxButton value="three">Choice Three</CheckboxButton>
      </CheckboxGroup>
      <h2>
        <code>isDisabled</code> on <code>{CheckboxButton.name}</code>
      </h2>
      <CheckboxGroup value={['one']}>
        <CheckboxButton value="one">Choice One</CheckboxButton>
        <CheckboxButton value="two" isDisabled>
          Choice Two
        </CheckboxButton>
        <CheckboxButton value="three">Choice Three</CheckboxButton>
      </CheckboxGroup>
    </UiKitInitializer>
  )
}

DisabledState.args = { value: ['one'], isDisabled: true }
