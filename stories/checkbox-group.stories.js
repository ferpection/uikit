import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { CheckboxGroup, CheckboxButton, DatePickerField, TextField } from '../src/components'

storiesOf('Components|Forms/CheckboxGroup', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('basic example', () => (
    <>
      <CheckboxGroup value={['three']} onValueChange={action('value changed')}>
        <CheckboxButton value="one">Choice One</CheckboxButton>
        <CheckboxButton value="two">Choice Two</CheckboxButton>
        <CheckboxButton value="three">Choice Three</CheckboxButton>
      </CheckboxGroup>
    </>
  ))
  .add('sub component', () => (
    <>
      <h2>
        <code>{TextField.name}</code>
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
        <code>{DatePickerField.name} within a <code>div</code></code>
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
          <div>Choice Two: <DatePickerField /></div>
        </CheckboxButton>
        <CheckboxButton value="three">Choice Three</CheckboxButton>
      </CheckboxGroup>
    </>
  ))
  .add('disabled state', () => (
    <>
      Disabled state must be added on the <code>{CheckboxGroup.name}</code> directly. Not on the{' '}
      <code>{CheckboxButton.name}</code>.
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
      <CheckboxGroup isDisabled>
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
      <CheckboxGroup>
        <CheckboxButton>Choice One</CheckboxButton>
        <CheckboxButton isDisabled>Choice Two</CheckboxButton>
        <CheckboxButton>Choice Three</CheckboxButton>
      </CheckboxGroup>
    </>
  ))
