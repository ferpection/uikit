/** @jsx jsx */
import React, { useState, useEffect, Fragment } from 'react'
import RandomString from 'randomstring'
import { jsx } from '@emotion/core'

import { PlaceholderButton } from '../../buttons/PlaceholderButton/PlaceholderButton'
import { TextField, TextFieldProps } from '../TextField/TextField'
import { Button } from '../../buttons/Button/Button'

import {
  list,
  hideAndShowIconOnHover,
  listItem,
  icon,
  addButton,
  listErrors,
} from './styles'
import { FormErrors } from '../FormErrors/FormErrors'
import { FormProps } from '../form-props'

export const TextFieldList: React.FC<
  FormProps & TextFieldListProps
> = props => {
  const intialValues =
    props.value != null
      ? props.value.map(el => ({
        id: RandomString.generate(20),
        text: el,
      }))
      : []
  const [values, setValues] = useState<{ id: string; text: string }[]>(
    intialValues
  )
  const [errorMessages, setErrorMessages] = useState<{
    [errorKey: string]: any
  }>({})

  const { onValueChange = () => {}, onErrors = () => {} } = props
  const flatErrorMessages = Object.keys(errorMessages)
    .map(key => errorMessages[key])
    .reduce((aggr, curr) => {
      return Object.assign({}, aggr, curr)
    }, {})

  useEffect(() => onValueChange(values.map(value => value.text)), [values])
  useEffect(() => onErrors(flatErrorMessages), [errorMessages])

  const {
    isDisabled,
    isEditable,
    placeholder,
    dataType,
    initalFieldCount = 1,
    buttonText = 'Add a list item',
    displayErrorStrategy = 'on-field',
  } = props

  const handleAddition = () =>
    setValues([...values, { id: RandomString.generate(20), text: '' }])
  const handleDeletion = (index: string) =>
    setValues(values.filter(values => values.id !== index))
  const handleChange = (userValue: string, index: string) =>
    setValues(
      values.map(value => {
        if (value.id !== index) return value

        return { id: value.id, text: userValue }
      })
    )
  const handleErrors = (errors: { [errorkey: string]: any }, index: string) => {
    const newErrors = { ...errorMessages, [index]: errors }

    if (Object.keys(errors).length < 1) {
      delete newErrors[index]
    }

    setErrorMessages(newErrors)
  }

  if (values.length < initalFieldCount) {
    for (let index = values.length - 1; index < initalFieldCount; index++) {
      handleAddition()
    }
  }

  return (
    <Fragment>
      <ol css={[list]}>
        {values.map(value => (
          <li key={value.id} css={[listItem]}>
            {isEditable && !isDisabled ? (
              <Button
                icon="trash"
                css={[icon, hideAndShowIconOnHover]}
                isRaw
                isDisabled={isDisabled}
                onClick={() => handleDeletion(value.id)}
              />
            ) : null}
            <TextField
              dataType={dataType}
              placeholder={placeholder}
              value={value.text}
              isDisabled={isDisabled}
              onValueChange={userValue => handleChange(userValue, value.id)}
              onErrors={errors => handleErrors(errors, value.id)}
              hideErrors={['hidden', 'on-list'].includes(displayErrorStrategy)}
            />
          </li>
        ))}
        {isEditable ? (
          <li css={[listItem]}>
            <Button
              css={[icon]}
              icon="plus"
              isRaw
              isDisabled={isDisabled}
              onClick={handleAddition}
            />
            <PlaceholderButton
              css={[addButton]}
              icon={null}
              isDisabled={isDisabled}
              onClick={handleAddition}
            >
              {buttonText}
            </PlaceholderButton>
          </li>
        ) : null}
      </ol>
      {displayErrorStrategy === 'on-list' ? (
        <div css={[listErrors]}>
          <FormErrors errors={flatErrorMessages} />
        </div>
      ) : null}
    </Fragment>
  )
}

export interface TextFieldListProps {
  dataType?: TextFieldProps['dataType']
  isEditable?: boolean
  initalFieldCount?: number
  buttonText?: string
  displayErrorStrategy?: 'hidden' | 'on-field' | 'on-list'
  value?: string[]
  onValueChange?: (values: string[]) => void
}
