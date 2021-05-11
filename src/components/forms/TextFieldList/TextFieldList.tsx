/** @jsx jsx */
import React, { useState, useEffect, Fragment } from 'react'
import RandomString from 'randomstring'
import { jsx } from '@emotion/react'

import { useMergedFocusHandlers } from '../../../hooks/useMergedFocusHandlers'

import { PlaceholderButton } from '../../buttons/PlaceholderButton/PlaceholderButton'
import { Button } from '../../buttons/Button/Button'

import { TextField, TextFieldProps } from '../TextField/TextField'
import { FormErrorMessages } from '../FormErrorMessages/FormErrorMessages'
import { defaultFormProps, FormProps } from '../form-props'
import { FormErrors } from '../form-errors'

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
  className?: string
}

interface GroupedFormErrors {
  [id: string]: FormErrors
}

export const TextFieldList: React.FC<TextFieldListProps> = props => {
  const flatInitialValues = props.value || []
  const intialValues = flatInitialValues.map(el => ({
    id: RandomString.generate(20),
    text: el,
  }))

  const [values, setValues] = useState<{ id: string; text: string }[]>(intialValues)
  const [handleFocus, handleBlur] = useMergedFocusHandlers(props)
  const [inputErrors, setInputErrors] = useState<GroupedFormErrors>({})
  const flatValues = values.map(value => value.text)

  const { onValueChange = () => {}, onErrors = () => {}, validators = [] } = props
  const errorMessages = Object.keys(inputErrors)
    .map(key => inputErrors[key])
    .reduce((aggr, curr) => ({ ...aggr, ...curr }), {})

  useEffect(() => onValueChange(flatValues), [values.join('-')])
  useEffect(() => onErrors(errorMessages), [Object.keys(inputErrors).join('-')])
  useEffect(
    () =>
      setValues(
        flatInitialValues.map((text, index) => ({
          id: values[index]?.id ?? RandomString.generate(20),
          text,
        })),
      ),
    [flatInitialValues.join('-')],
  )

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
    className,
  } = props

  const handleAddition = () => setValues([...values, { id: RandomString.generate(20), text: '' }])
  const handleDeletion = (index: string) => {
    setValues(values.filter(values => values.id !== index))
    setInputErrors(
      Object.keys(inputErrors).reduce((ie: GroupedFormErrors, curr) => {
        if (curr === index) {
          return ie
        }

        return { ...ie, [curr]: ie[curr] }
      }, {}),
    )
  }
  const handleChange = (userValue: string, index: string) =>
    setValues(
      values.map(value => {
        if (value.id !== index) return value

        return { id: value.id, text: userValue }
      }),
    )
  const handleErrors = (errors: FormErrors, index: string) => {
    const newErrors = { ...inputErrors, [index]: errors }

    if (Object.keys(errors).length < 1) {
      delete newErrors[index]
    }

    setInputErrors(newErrors)
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
              onMouseDown={() => handleFocus()}
              onClick={() => handleDeletion(value.id)}
              onMouseUp={() => handleBlur()}
              onBlur={() => handleBlur()}
            />
          ) : null}
          <TextField
            css={[textFieldAdjustments]}
            dataType={dataType}
            placeholder={placeholder}
            rowCount={rowCount}
            isDisabled={isDisabled}
            value={value.text}
            validators={validators.map(validator => () => validator(flatValues))}
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
              tabIndex={-1}
              isRaw
              isDisabled={isDisabled}
              onFocus={() => handleFocus()}
              onMouseDown={() => handleFocus()}
              onClick={() => handleAddition()}
              onMouseUp={() => handleBlur()}
              onBlur={() => handleBlur()}
            />
          ) : null}
          <PlaceholderButton
            css={[addButton]}
            icon={isOrdered ? null : 'plus'}
            isDisabled={isDisabled}
            onFocus={() => handleFocus()}
            onMouseDown={() => handleFocus()}
            onClick={() => handleAddition()}
            onMouseUp={() => handleBlur()}
            onBlur={() => handleBlur()}
          >
            {buttonText}
          </PlaceholderButton>
        </li>
      ) : null}
    </Fragment>
  )

  return (
    <Fragment>
      {isOrdered ? (
        <ol className={className} css={[list]}>
          {itemsJSX}
        </ol>
      ) : (
        <ul className={className} css={[list, hideMarker]}>
          {itemsJSX}
        </ul>
      )}
      {displayErrorStrategy === 'on-list' ? (
        <div css={[listErrors]} onFocus={() => handleFocus()} onBlur={() => handleBlur()}>
          <FormErrorMessages errors={errorMessages} />
        </div>
      ) : null}
    </Fragment>
  )
}

TextFieldList.defaultProps = {
  ...(defaultFormProps as TextFieldListProps),
}
