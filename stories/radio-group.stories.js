import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { RadioGroup, RadioButton, TextField, DatePickerField } from '../src/components'

storiesOf('Components|Forms/RadioGroup', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('basic example', () => (
    <>
      <RadioGroup value="three" onValueChange={action('value changed')}>
        <RadioButton value="one">Choice One</RadioButton>
        <RadioButton value="two">Choice Two</RadioButton>
        <RadioButton value="three">Choice Three</RadioButton>
      </RadioGroup>
    </>
  ))
  .add('sub component', () => (
    <>
      <h2>
        <code>{TextField.name}</code>
      </h2>
      <pre>
        <code>
          &lt;RadioGroup&gt;
          <br />
          &lt;RadioButton&gt;Choice One&lt;/RadioButton&gt;
          <br />
          &lt;RadioButton&gt;Choice Two: &lt;TextField /&gt;&lt;/RadioButton&gt;
          <br />
          &lt;RadioButton&gt;Choice Three&lt;/RadioButton&gt;
          <br />
          &lt;/RadioGroup&gt;
          <br />
        </code>
      </pre>
      <RadioGroup value="three" onValueChange={action('value changed')}>
        <RadioButton value="one">Choice One</RadioButton>
        <RadioButton value="two">
          Choice Two: <TextField />
        </RadioButton>
        <RadioButton value="three">Choice Three</RadioButton>
      </RadioGroup>
      <h2>
        <code>{DatePickerField.name}</code>
      </h2>
      <pre>
        <code>
          &lt;RadioGroup&gt;
          <br />
          &lt;RadioButton&gt;Choice One&lt;/RadioButton&gt;
          <br />
          &lt;RadioButton&gt;Choice Two: &lt;DatePickerField /&gt;&lt;/RadioButton&gt;
          <br />
          &lt;RadioButton&gt;Choice Three&lt;/RadioButton&gt;
          <br />
          &lt;/RadioGroup&gt;
          <br />
        </code>
      </pre>
      <RadioGroup value="three" onValueChange={action('value changed')}>
        <RadioButton value="one">Choice One</RadioButton>
        <RadioButton value="two">
          Choice Two: <DatePickerField />
        </RadioButton>
        <RadioButton value="three">Choice Three</RadioButton>
      </RadioGroup>
      <h2>
        <code>Small {DatePickerField.name}</code>
      </h2>
      <pre>
        <code>
          &lt;RadioGroup&gt;
          <br />
          &lt;RadioButton&gt;Choice One&lt;/RadioButton&gt;
          <br />
          &lt;RadioButton&gt;Choice Two: &lt;DatePickerField isSmall /&gt;&lt;/RadioButton&gt;
          <br />
          &lt;RadioButton&gt;Choice Three&lt;/RadioButton&gt;
          <br />
          &lt;/RadioGroup&gt;
          <br />
        </code>
      </pre>
      <RadioGroup value="three" onValueChange={action('value changed')}>
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
      <pre>
        <code>
          &lt;RadioGroup&gt;
          <br />
          &lt;RadioButton&gt;Choice One&lt;/RadioButton&gt;
          <br />
          &lt;RadioButton&gt;
          <br />
          &lt;div&gt;Choice Two: &lt;DatePickerField /&gt;&lt;/div&gt;
          <br />
          &lt;/RadioButton&gt;
          <br />
          &lt;RadioButton&gt;Choice Three&lt;/RadioButton&gt;
          <br />
          &lt;/RadioGroup&gt;
          <br />
        </code>
      </pre>
      <RadioGroup value="three" onValueChange={action('value changed')}>
        <RadioButton value="one">Choice One</RadioButton>
        <RadioButton value="two">
          <div>
            Choice Two: <DatePickerField />
          </div>
        </RadioButton>
        <RadioButton value="three">Choice Three</RadioButton>
      </RadioGroup>
    </>
  ))
  .add('disabled state', () => (
    <>
      <h2>
        <code>isDisabled</code> on <code>{RadioGroup.name}</code>
      </h2>
      <pre>
        <code>
          &lt;RadioGroup isDisabled&gt;
          <br />
          &lt;RadioButton&gt;Choice One&lt;/RadioButton&gt;
          <br />
          &lt;RadioButton&gt;Choice Two&lt;/RadioButton&gt;
          <br />
          &lt;RadioButton&gt;Choice Three&lt;/RadioButton&gt;
          <br />
          &lt;/RadioGroup&gt;
          <br />
        </code>
      </pre>
      <RadioGroup value="one" isDisabled>
        <RadioButton value="one">Choice One</RadioButton>
        <RadioButton value="two">Choice Two</RadioButton>
        <RadioButton value="three">Choice Three</RadioButton>
      </RadioGroup>
      <h2>
        <code>isDisabled</code> on <code>{RadioButton.name}</code>
      </h2>
      <pre>
        <code>
          &lt;RadioGroup&gt;
          <br />
          &lt;RadioButton&gt;Choice One&lt;/RadioButton&gt;
          <br />
          &lt;RadioButton isDisabled&gt;Choice Two&lt;/RadioButton&gt;
          <br />
          &lt;RadioButton&gt;Choice Three&lt;/RadioButton&gt;
          <br />
          &lt;/RadioGroup&gt;
          <br />
        </code>
      </pre>
      <RadioGroup value="one">
        <RadioButton value="one">Choice One</RadioButton>
        <RadioButton value="two" isDisabled>Choice Two</RadioButton>
        <RadioButton value="three">Choice Three</RadioButton>
      </RadioGroup>
    </>
  ))
