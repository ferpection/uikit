/** @jsx jsx */
import React, { useState, useEffect, Fragment } from 'react'
import RandomString from 'randomstring'
import { jsx } from '@emotion/core'

import { useMergedFocusHandlers } from '../../../hooks/useMergedFocusHandlers'
import { PlaceholderButton } from '../../buttons/PlaceholderButton/PlaceholderButton'
import { TextField, TextFieldProps } from '../TextField/TextField'
import { Button } from '../../buttons/Button/Button'
import { FormErrorMessages } from '../FormErrorMessages/FormErrorMessages'
import { FormProps } from '../form-props'

import {
  list,
  hideAndShowIconOnHover,
  listItem,
  icon,
  addButton,
  listErrors,
  textFieldAdjustments,
  hideMarker,
} from './styles'

export const TextFieldList: React.FC<TextFieldListProps> = props => {
  const intialValues =
    props.value != null
      ? props.value.map(el => ({
        id: RandomString.generate(20),
        text: el,
      }))
      : []
  const [values, setValues] = useState<{ id: string; text: string }[]>(intialValues)
  const [errorMessages, setErrorMessages] = useState<{
    [errorKey: string]: any
  }>({})

  const { onValueChange = () => {}, onErrors = () => {} } = props
  const flatErrorMessages = Object.keys(errorMessages)
    .map(key => errorMessages[key])
    .reduce((aggr, curr) => {
      return Object.assign({}, aggr, curr)
    }, {})

  const [handleFocus, handleBlur] = useMergedFocusHandlers(props)

  useEffect(() => onValueChange(values.map(value => value.text)), [values])
  useEffect(() => onErrors(flatErrorMessages), [errorMessages])
  useEffect(() => {
    const mergedValue = props.value.reduce((aggr, curr, index) => {
      const { id = RandomString.generate(20) } = values[index]

      return [...aggr, {
        id: id,
        text: curr
      }]
    }, [])

    setValues(mergedValue)
  }, [...(props.value || [])])

  const {
    isDisabled,
    isEditable,
    placeholder,
    dataType,
    initialFieldCount = 1,
    maxFieldCount,
    buttonText = 'Add a list item',
    displayErrorStrategy = 'on-field',
    rowCount = 1,
    isOrdered,
  } = props

  const handleAddition = () => setValues([...values, { id: RandomString.generate(20), text: '' }])
  const handleDeletion = (index: string) => setValues(values.filter(values => values.id !== index))
  const handleChange = (userValue: string, index: string) =>
    setValues(
      values.map(value => {
        if (value.id !== index) return value

        return { id: value.id, text: userValue }
      }),
    )
  const handleErrors = (errors: { [errorkey: string]: any }, index: string) => {
    const newErrors = { ...errorMessages, [index]: errors }

    if (Object.keys(errors).length < 1) {
      delete newErrors[index]
    }

    setErrorMessages(newErrors)
  }

  if (values.length < initialFieldCount) {
    for (let index = values.length - 1; index < initialFieldCount; index++) {
      handleAddition()
    }
  }

  const itemsJSX = (
    <Fragment>
      {values.map(value => (
        <li key={value.id} css={[listItem]}>
          {isEditable && !isDisabled ? (
            <Button
              icon="trash"
              css={[icon, hideAndShowIconOnHover]}
              isRaw
              isDisabled={isDisabled}
              onFocus={() => handleFocus()}
              onClick={() => {
                handleBlur()
                handleDeletion(value.id)
              }}
            />
          ) : null}
          <TextField
            css={[textFieldAdjustments]}
            dataType={dataType}
            placeholder={placeholder}
            rowCount={rowCount}
            value={value.text}
            isDisabled={isDisabled}
            onValueChange={userValue => handleChange(userValue, value.id)}
            onErrors={errors => handleErrors(errors, value.id)}
            hideErrors={['hidden', 'on-list'].includes(displayErrorStrategy)}
            onFocus={() => handleFocus()}
            onBlur={() => handleBlur()}
          />
        </li>
      ))}
      {isEditable && (maxFieldCount == null || values.length < maxFieldCount) ? (
        <li css={[listItem, hideMarker]}>
          {isOrdered ? (
            <Button
              css={[icon]}
              icon="plus"
              isRaw
              isDisabled={isDisabled}
              onFocus={() => handleFocus()}
              onBlur={() => handleBlur()}
              onClick={() => handleAddition()}
            />
          ) : null}
          <PlaceholderButton
            css={[addButton]}
            icon={isOrdered ? null : 'plus'}
            isDisabled={isDisabled}
            onFocus={() => handleFocus()}
            onBlur={() => handleBlur()}
            onClick={() => handleAddition()}
          >
            {buttonText}
          </PlaceholderButton>
        </li>
      ) : null}
    </Fragment>
  )

  return (
    <Fragment>
      {isOrdered ? <ol css={[list]}>{itemsJSX}</ol> : <ul css={[list, hideMarker]}>{itemsJSX}</ul>}
      {displayErrorStrategy === 'on-list' ? (
        <div css={[listErrors]} onFocus={() => handleFocus()} onBlur={() => handleBlur()}>
          <FormErrorMessages errors={flatErrorMessages} />
        </div>
      ) : null}
    </Fragment>
  )
}

export interface TextFieldListProps extends FormProps {
  dataType?: TextFieldProps['dataType']
  isEditable?: boolean
  isOrdered?: boolean
  initialFieldCount?: number
  maxFieldCount?: number
  rowCount?: number
  buttonText?: string
  displayErrorStrategy?: 'hidden' | 'on-field' | 'on-list'
  value?: string[]
  onValueChange?: (values: string[]) => void
}
