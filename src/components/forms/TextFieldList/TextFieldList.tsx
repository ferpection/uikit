/** @jsx jsx */
import React, { useState, useEffect, Fragment, FocusEvent, useRef } from 'react'
import RandomString from 'randomstring'
import { jsx } from '@emotion/core'

import { PlaceholderButton } from '../../buttons/PlaceholderButton/PlaceholderButton'
import { TextField, TextFieldProps } from '../TextField/TextField'
import { Button } from '../../buttons/Button/Button'
import { FormErrors } from '../FormErrors/FormErrors'
import { FormProps } from '../form-props'

import {
  list,
  hideAndShowIconOnHover,
  listItem,
  icon,
  addButton,
  listErrors,
} from './styles'

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

  const { onFocus = () => {}, onBlur = () => {} } = props
  const [isFocused, setFocus] = useState(false)
  const timeoutRef = useRef(null)
  useEffect(() => {
    if (isFocused) {
      onFocus({} as FocusEvent)
    }

    if (!isFocused) {
      onBlur({} as FocusEvent)
    }

    return () => {
      if (timeoutRef.current != null) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [isFocused])

  const {
    isDisabled,
    isEditable,
    placeholder,
    dataType,
    initialFieldCount = 1,
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
  const handleFocus = () => {
    clearTimeout(timeoutRef.current)
    if (!isFocused) {
      setFocus(true)
    }
  }
  const handleBlur = () => {
    const timout = setTimeout(() => {
      if (isFocused) {
        setFocus(false)
      }
    }, 0)

    timeoutRef.current = timout
  }

  if (values.length < initialFieldCount) {
    for (let index = values.length - 1; index < initialFieldCount; index++) {
      handleAddition()
    }
  }

  return (
    <Fragment>
      <ol css={[list]} onFocus={() => handleFocus()} onBlur={() => handleBlur()}>
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
  initialFieldCount?: number
  buttonText?: string
  displayErrorStrategy?: 'hidden' | 'on-field' | 'on-list'
  value?: string[]
  onValueChange?: (values: string[]) => void
}
