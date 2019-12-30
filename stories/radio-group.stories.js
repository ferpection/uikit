import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { RadioGroup, RadioButton } from '../src/components'

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
  .add('disabled state', () => (
    <>
      Disabled state must be added on the <code>{RadioGroup.name}</code> directly. Not on the{' '}
      <code>{RadioButton.name}</code>.
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
      <RadioGroup isDisabled>
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
      <RadioGroup>
        <RadioButton>Choice One</RadioButton>
        <RadioButton isDisabled>Choice Two</RadioButton>
        <RadioButton>Choice Three</RadioButton>
      </RadioGroup>
    </>
  ))