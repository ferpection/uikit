import { useState } from 'react'

import { action } from '@storybook/addon-actions'

import { TextFieldList, UiKitInitializer } from '../../src/components/index.ts'
import { N75_COLOR } from '../../src/colors/index.ts'

export default {
  title: 'Components/Forms/TextFieldList',
  component: TextFieldList,

  parameters: { controls: { sort: 'requiredFirst' } },
  argTypes: {
    initialFieldCount: 2,
    isOrdered: false,
    isDisabled: false,
    placeholder: 'Add your text here',
    buttonText: 'Add a list item',
    isEditable: false,
    maxFieldCount: 100,
    rowCount: 1,
    displayErrorStrategy: {
      choices: ['on-list', 'on-field', 'hidden'],
      defaultValue: 'on-field',
      type: 'select',
    },
    dataType: {
      choices: ['email', 'number', 'text'],
      defaultValue: 'text',
      type: 'select',
    },
    value: {
      defaultValue: [],
      type: 'object',
    },
    markerPattern: {
      defaultValue: [],
      type: 'object',
    },
    onValueChange: {
      control: false,
    },
    className: {
      table: {
        disable: true,
      },
    },
    onFocus: {
      control: false,
    },
    onBlur: {
      control: false,
    },
    onErrors: {
      control: false,
    },
  },
}

export const NormalState = ({
  value,
  onErrors,
  onValueChange,
  onIdentifiableValueChange,
  onBlur,
  onFocus,
  ...props
}) => {
  const [values, setValues] = useState(value)
  const [valuesAndIDs, setValuesAndIDs] = useState(value)

  return (
    <UiKitInitializer>
      <TextFieldList
        value={values}
        onFlatValueChange={values => setValues(values)}
        onValueChange={values => setValuesAndIDs(values)}
        {...props}
      />
      <pre
        style={{
          backgroundColor: N75_COLOR.toString(),
          padding: 40,
          marginTop: 40,
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <div>Value: {JSON.stringify(valuesAndIDs, null, 2)}</div>
        <div>Flat Value: {JSON.stringify(values, null, 2)}</div>
      </pre>
    </UiKitInitializer>
  )
}

NormalState.args = {
  value: ['yes', 'no', 'maybe'],
}

export const EditableState = ({ onErrors, onValueChange, onBlur, onFocus, ...props }) => {
  const [values, setValues] = useState([])

  return (
    <UiKitInitializer>
      <TextFieldList
        onValueChange={values => setValues(values)}
        onFocus={action('focus in')}
        onBlur={action('focus out')}
        {...props}
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
    </UiKitInitializer>
  )
}

EditableState.args = {
  isEditable: true,
}

const MAX_VALUES = 3
export const ErrorState = ({ onErrors, onValueChange, onBlur, onFocus, ...props }) => {
  const [values, setValues] = useState([])
  const [errors, setErrors] = useState({})

  return (
    <UiKitInitializer>
      <TextFieldList {...props} />
      <h3>With custom validation</h3>
      <p>It is possible to add custom validator to the list. Validators have access to list' value</p>
      <TextFieldList
        onValueChange={values => setValues(values)}
        onErrors={values => setErrors(values)}
        validators={[
          v => ({ 'customError:maxLenght': v.length > MAX_VALUES && { length: v.length, max: MAX_VALUES } }),
        ]}
        {...props}
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
    </UiKitInitializer>
  )
}

ErrorState.args = {
  dataType: 'email',
}

export const DisabledState = ({ onErrors, onValueChange, onBlur, onFocus, ...props }) => {
  const [values, setValues] = useState([])

  return (
    <UiKitInitializer>
      <TextFieldList onValueChange={values => setValues(values)} {...props} />
      <pre
        style={{
          backgroundColor: N75_COLOR.toString(),
          padding: 40,
          marginTop: 40,
        }}
      >
        Value: {JSON.stringify(values, null, 2)}
      </pre>
    </UiKitInitializer>
  )
}

DisabledState.args = {
  initalFieldCount: 3,
  isEditable: false,
  isDisabled: true,
}
