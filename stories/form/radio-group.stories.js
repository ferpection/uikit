import { withA11y } from '@storybook/addon-a11y'
import { action } from '@storybook/addon-actions'

import { RadioGroup, RadioButton, TextField, DatePickerField, UiKitInitializer } from '../../src/components'

export default {
  title: 'Components/Forms/RadioGroup',
  component: RadioGroup,
  decorators: [withA11y],
  args: {
    value: 'three',
    onErrors: () => {},
    onBlur: () => {},
    onFocus: () => {},
    onValueChange: () => {},
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
      <RadioGroup {...args}>
        <RadioButton value="one">Unique choice</RadioButton>
      </RadioGroup>
      <RadioGroup {...args}>
        <RadioButton value="one">Choice One</RadioButton>
        <RadioButton value="two">Choice Two</RadioButton>
        <RadioButton value="three">Choice Three</RadioButton>
      </RadioGroup>
    </UiKitInitializer>
  )
}

export const SubComponent = () => {
  return (
    <UiKitInitializer>
      <h2>
        <code>{TextField.name}</code>
      </h2>
      <RadioGroup>
        <RadioButton value="one">Choice One</RadioButton>
        <RadioButton value="two">
          Choice Two: <TextField />
        </RadioButton>
        <RadioButton value="three">Choice Three</RadioButton>
      </RadioGroup>
      <h2>
        <code>{DatePickerField.name}</code>
      </h2>
      <RadioGroup>
        <RadioButton value="one">Choice One</RadioButton>
        <RadioButton value="two">
          Choice Two: <DatePickerField />
        </RadioButton>
        <RadioButton value="three">Choice Three</RadioButton>
      </RadioGroup>
      <h2>
        <code>Small {DatePickerField.name}</code>
      </h2>
      <RadioGroup>
        <RadioButton value="one">Choice One</RadioButton>
        <RadioButton value="two">
          Choice Two: <DatePickerField isSmall />
        </RadioButton>
        <RadioButton value="three">Choice Three</RadioButton>
      </RadioGroup>
      <h2>
        <code>
          {DatePickerField.name} within a <code>div</code>
        </code>
      </h2>
      <RadioGroup>
        <RadioButton value="one">Choice One</RadioButton>
        <RadioButton value="two">
          <div>
            Choice Two: <DatePickerField />
          </div>
        </RadioButton>
        <RadioButton value="three">Choice Three</RadioButton>
      </RadioGroup>
    </UiKitInitializer>
  )
}

export const ErrorState = () => {
  return (
    <UiKitInitializer>
      <RadioGroup onValueChange={action('value changed')} onErrors={action('errors thrown')} isRequired>
        <RadioButton value="one">Choice One</RadioButton>
        <RadioButton value="two">Choice Two</RadioButton>
        <RadioButton value="three">Choice Three</RadioButton>
      </RadioGroup>
    </UiKitInitializer>
  )
}

export const DisabledState = () => {
  return (
    <UiKitInitializer>
      <h2>
        <code>isDisabled</code> on <code>{RadioGroup.name}</code>
      </h2>
      <RadioGroup value="one" isDisabled>
        <RadioButton value="one">Choice One</RadioButton>
        <RadioButton value="two">Choice Two</RadioButton>
        <RadioButton value="three">Choice Three</RadioButton>
      </RadioGroup>
      <h2>
        <code>isDisabled</code> on <code>{RadioButton.name}</code>
      </h2>
      <RadioGroup value="one">
        <RadioButton value="one">Choice One</RadioButton>
        <RadioButton value="two" isDisabled>
          Choice Two
        </RadioButton>
        <RadioButton value="three">Choice Three</RadioButton>
      </RadioGroup>
    </UiKitInitializer>
  )
}
