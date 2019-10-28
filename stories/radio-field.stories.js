import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import { RadioField, RadioButton } from '../src/components'

storiesOf('Components|Forms/RadioField', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('basic example', () => (
    <>
      <RadioField value="three">
        <RadioButton value="one">Choice One</RadioButton>
        <RadioButton value="two">Choice Two</RadioButton>
        <RadioButton value="three">Choice Three</RadioButton>
      </RadioField>
    </>
  ))
  .add('disabled state', () => (
    <>
      Disabled state must be added on the <code>{RadioField.name}</code>{' '}
      directly. Not on the <code>{RadioButton.name}</code>.
      <h2>
        <code>isDisabled</code> on <code>{RadioField.name}</code>
      </h2>
      <pre>
        <code>
          &lt;RadioField isDisabled&gt;
          <br />
          &lt;RadioButton&gt;Choice One&lt;/RadioButton&gt;
          <br />
          &lt;RadioButton&gt;Choice Two&lt;/RadioButton&gt;
          <br />
          &lt;RadioButton&gt;Choice Three&lt;/RadioButton&gt;
          <br />
          &lt;/RadioField&gt;
          <br />
        </code>
      </pre>
      <RadioField isDisabled>
        <RadioButton value="one">Choice One</RadioButton>
        <RadioButton value="two">Choice Two</RadioButton>
        <RadioButton value="three">Choice Three</RadioButton>
      </RadioField>
      <h2>
        <code>isDisabled</code> on <code>{RadioButton.name}</code>
      </h2>
      <pre>
        <code>
          &lt;RadioField&gt;
          <br />
          &lt;RadioButton&gt;Choice One&lt;/RadioButton&gt;
          <br />
          &lt;RadioButton isDisabled&gt;Choice Two&lt;/RadioButton&gt;
          <br />
          &lt;RadioButton&gt;Choice Three&lt;/RadioButton&gt;
          <br />
          &lt;/RadioField&gt;
          <br />
        </code>
      </pre>
      <RadioField>
        <RadioButton>Choice One</RadioButton>
        <RadioButton isDisabled>Choice Two</RadioButton>
        <RadioButton>Choice Three</RadioButton>
      </RadioField>
    </>
  ))
