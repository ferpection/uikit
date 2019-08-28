import React, { useState } from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, boolean, number, text } from '@storybook/addon-knobs'

import { OrderedFieldList } from '../src/components/index.js'
import { N75_COLOR } from '../src/colors/index.js'

storiesOf('Components|Forms/OrderedFieldList', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('normal state', () => {
    const Story = () => {
      const [values, setValues] = useState([])

      return (
        <>
          <OrderedFieldList
            placeholder={text('placeholder', 'Add your text here')}
            initalFieldCount={number('initial field count', 3)}
            onValueChange={values => setValues(values)}
          />
          <pre
            css={{
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
          <OrderedFieldList
            placeholder={text('placeholder', 'Add your text here')}
            buttonText={text('button text', 'Add a list item')}
            isEditable
            onValueChange={values => setValues(values)}
          />
          <pre
            css={{
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
  .add('disabled state', () => {
    const Story = () => {
      const [values, setValues] = useState([])

      return (
        <>
          <OrderedFieldList
            buttonText={text('button text', 'Add a list item')}
            placeholder={text('placeholder', 'Add your text here')}
            initalFieldCount={number('initial field count', 3)}
            isEditable={boolean('editable', false)}
            isDisabled
            onValueChange={values => setValues(values)}
          />
          <pre
            css={{
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
