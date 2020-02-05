import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { action } from '@storybook/addon-actions'
import { withKnobs, boolean, number, text, select } from '@storybook/addon-knobs'

import { TextFieldList } from '../src/components/index.ts'
import { N75_COLOR } from '../src/colors/index.ts'

storiesOf('Components|Forms/TextFieldList', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('normal state', () => {
    const Story = () => {
      const intialValues = boolean('inital field values', true) ? ['yes', 'no', 'maybe'] : []
      const [values, setValues] = useState(intialValues)

      return (
        <>
          <TextFieldList
            placeholder={text('placeholder', 'Add your text here')}
            initialFieldCount={number('initial field count', 2)}
            value={values}
            isOrdered={boolean('is ordered', true)}
            onValueChange={values => setValues(values)}
          />
          <pre
            style={{
              backgroundColor: N75_COLOR.toString(),
              padding: 40,
              marginTop: 40,
            }}
          >
            Value: {JSON.stringify(values, null, 2)}
          </pre>
        </>
      )
    }

    return <Story />
  })
  .add('editable state', () => {
    const Story = () => {
      const [values, setValues] = useState([])

      return (
        <>
          <TextFieldList
            placeholder={text('placeholder', 'Add your text here')}
            buttonText={text('button text', 'Add a list item')}
            isEditable
            isOrdered={boolean('is ordered', true)}
            onValueChange={values => setValues(values)}
            initialFieldCount={number('initial field count', 2)}
            maxFieldCount={number('max field count', null)}
            onFocus={action('focus in')}
            onBlur={action('focus out')}
          />
          <pre
            style={{
              backgroundColor: N75_COLOR.toString(),
              padding: 40,
              marginTop: 40,
            }}
          >
            Value: {JSON.stringify(values, null, 2)}
          </pre>
        </>
      )
    }

    return <Story />
  })
  .add('error state', () => {
    const Story = () => {
      const [values, setValues] = useState([])
      const [errors, setErrors] = useState({})

      return (
        <>
          <TextFieldList
            placeholder={text('placeholder', 'Add your text here')}
            buttonText={text('button text', 'Add a list item')}
            isEditable
            dataType="email"
            onValueChange={values => setValues(values)}
            onErrors={values => setErrors(values)}
            displayErrorStrategy={select('display error strategy', ['on-list', 'on-field', 'hidden'], 'on-field')}
          />
          <pre
            style={{
              backgroundColor: N75_COLOR.toString(),
              padding: 40,
              marginTop: 40,
            }}
          >
            Value: {JSON.stringify(values, null, 2)}
            <br />
            <br />
            Errors: {JSON.stringify(errors, null, 2)}
          </pre>
        </>
      )
    }

    return <Story />
  })
  .add('disabled state', () => {
    const Story = () => {
      const [values, setValues] = useState([])

      return (
        <>
          <TextFieldList
            buttonText={text('button text', 'Add a list item')}
            placeholder={text('placeholder', 'Add your text here')}
            initalFieldCount={number('initial field count', 3)}
            isEditable={boolean('editable', false)}
            isDisabled
            onValueChange={values => setValues(values)}
          />
          <pre
            style={{
              backgroundColor: N75_COLOR.toString(),
              padding: 40,
              marginTop: 40,
            }}
          >
            Value: {JSON.stringify(values, null, 2)}
          </pre>
        </>
      )
    }

    return <Story />
  })
