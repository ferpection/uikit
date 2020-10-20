import React from 'react'

import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { CheckboxGroup, CheckboxButton, DatePickerField, TextField } from '../src/components'

export default {
  title: 'Components/Forms/CheckboxGroup',
  component: CheckboxGroup,
  decorators: [withKnobs, withA11y],
}

export const BasicExemple = () => {
  return (
    <>
      <CheckboxGroup>
        <CheckboxButton value="one">Unique option</CheckboxButton>
      </CheckboxGroup>
      <CheckboxGroup value={['three']} onValueChange={action('value changed')}>
        <CheckboxButton value="one">Choice One</CheckboxButton>
        <CheckboxButton value="two">Choice Two</CheckboxButton>
        <CheckboxButton value="three">Choice Three</CheckboxButton>
      </CheckboxGroup>
    </>
  )
}

export const SubComponent = () => {
  return (
    <>
      <h2>
        <code>TextField</code>
      </h2>
      <pre>
        <code>
          &lt;CheckboxGroup&gt;
          <br />
          &lt;CheckboxButton&gt;Choice One&lt;/CheckboxButton&gt;
          <br />
          &lt;CheckboxButton&gt;Choice Two: &lt;TextField /&gt;&lt;/CheckboxButton&gt;
          <br />
          &lt;CheckboxButton&gt;Choice Three&lt;/CheckboxButton&gt;
          <br />
          &lt;/CheckboxGroup&gt;
          <br />
        </code>
      </pre>
      <CheckboxGroup value="three" onValueChange={action('value changed')}>
        <CheckboxButton value="one">Choice One</CheckboxButton>
        <CheckboxButton value="two">
          Choice Two: <TextField />
        </CheckboxButton>
        <CheckboxButton value="three">Choice Three</CheckboxButton>
      </CheckboxGroup>
      <h2>
        <code>{DatePickerField.name}</code>
      </h2>
      <pre>
        <code>
          &lt;CheckboxGroup&gt;
          <br />
          &lt;CheckboxButton&gt;Choice One&lt;/CheckboxButton&gt;
          <br />
          &lt;CheckboxButton&gt;Choice Two: &lt;DatePickerField /&gt;&lt;/CheckboxButton&gt;
          <br />
          &lt;CheckboxButton&gt;Choice Three&lt;/CheckboxButton&gt;
          <br />
          &lt;/CheckboxGroup&gt;
          <br />
        </code>
      </pre>
      <CheckboxGroup value="three" onValueChange={action('value changed')}>
        <CheckboxButton value="one">Choice One</CheckboxButton>
        <CheckboxButton value="two">
          Choice Two: <DatePickerField />
        </CheckboxButton>
        <CheckboxButton value="three">Choice Three</CheckboxButton>
      </CheckboxGroup>
      <h2>
        <code>Small {DatePickerField.name}</code>
      </h2>
      <pre>
        <code>
          &lt;CheckboxGroup&gt;
          <br />
          &lt;CheckboxButton&gt;Choice One&lt;/CheckboxButton&gt;
          <br />
          &lt;CheckboxButton&gt;Choice Two: &lt;DatePickerField isSmall /&gt;&lt;/CheckboxButton&gt;
          <br />
          &lt;CheckboxButton&gt;Choice Three&lt;/CheckboxButton&gt;
          <br />
          &lt;/CheckboxGroup&gt;
          <br />
        </code>
      </pre>
      <CheckboxGroup value="three" onValueChange={action('value changed')}>
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
      <pre>
        <code>
          &lt;CheckboxGroup&gt;
          <br />
          &lt;CheckboxButton&gt;Choice One&lt;/CheckboxButton&gt;
          <br />
          &lt;CheckboxButton&gt;
          <br />
          &lt;div&gt;Choice Two: &lt;DatePickerField /&gt;&lt;/div&gt;
          <br />
          &lt;/CheckboxButton&gt;
          <br />
          &lt;CheckboxButton&gt;Choice Three&lt;/CheckboxButton&gt;
          <br />
          &lt;/CheckboxGroup&gt;
          <br />
        </code>
      </pre>
      <CheckboxGroup value="three" onValueChange={action('value changed')}>
        <CheckboxButton value="one">Choice One</CheckboxButton>
        <CheckboxButton value="two">
          <div>
            Choice Two: <DatePickerField />
          </div>
        </CheckboxButton>
        <CheckboxButton value="three">Choice Three</CheckboxButton>
      </CheckboxGroup>
    </>
  )
}

export const ErrorState = () => {
  return (
    <>
      <CheckboxGroup onValueChange={action('value changed')} onErrors={action('errors thrown')} isRequired>
        <CheckboxButton value="one">Choice One</CheckboxButton>
        <CheckboxButton value="two">Choice Two</CheckboxButton>
        <CheckboxButton value="three">Choice Three</CheckboxButton>
      </CheckboxGroup>
    </>
  )
}

export const DisabledState = () => {
  return (
    <>
      <h2>
        <code>isDisabled</code> on <code>{CheckboxGroup.name}</code>
      </h2>
      <pre>
        <code>
          &lt;CheckboxGroup isDisabled&gt;
          <br />
          &lt;CheckboxButton&gt;Choice One&lt;/CheckboxButton&gt;
          <br />
          &lt;CheckboxButton&gt;Choice Two&lt;/CheckboxButton&gt;
          <br />
          &lt;CheckboxButton&gt;Choice Three&lt;/CheckboxButton&gt;
          <br />
          &lt;/CheckboxGroup&gt;
          <br />
        </code>
      </pre>
      <CheckboxGroup value="one" isDisabled>
        <CheckboxButton value="one">Choice One</CheckboxButton>
        <CheckboxButton value="two">Choice Two</CheckboxButton>
        <CheckboxButton value="three">Choice Three</CheckboxButton>
      </CheckboxGroup>
      <h2>
        <code>isDisabled</code> on <code>{CheckboxButton.name}</code>
      </h2>
      <pre>
        <code>
          &lt;CheckboxGroup&gt;
          <br />
          &lt;CheckboxButton&gt;Choice One&lt;/CheckboxButton&gt;
          <br />
          &lt;CheckboxButton isDisabled&gt;Choice Two&lt;/CheckboxButton&gt;
          <br />
          &lt;CheckboxButton&gt;Choice Three&lt;/CheckboxButton&gt;
          <br />
          &lt;/CheckboxGroup&gt;
          <br />
        </code>
      </pre>
      <CheckboxGroup value="one">
        <CheckboxButton value="one">Choice One</CheckboxButton>
        <CheckboxButton value="two" isDisabled>
          Choice Two
        </CheckboxButton>
        <CheckboxButton value="three">Choice Three</CheckboxButton>
      </CheckboxGroup>
    </>
  )
}
