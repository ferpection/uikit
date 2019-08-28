import React, { useState, useEffect } from 'react'
import propTypes from 'prop-types'
import RandomString from 'randomstring'

import { PlaceholderButton } from '../../buttons/PlaceholderButton/PlaceholderButton.jsx'
import { TextField } from '../TextField/TextField.jsx'
import { Button } from '../../buttons/Button/Button.jsx'

import {
  list,
  hideAndShowIconOnHover,
  listItem,
  icon,
  addButton,
  listErrors,
} from './styles'
import { FormErrors } from '../FormErrors/FormErrors.jsx'

export const TextFieldList = props => {
  const [values, setValues] = useState([])
  const [errorMessages, setErrorMessages] = useState({})

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
  } = props

  const handleAddition = () =>
    setValues([...values, { id: RandomString.generate(20), text: '' }])
  const handleDeletion = index =>
    setValues(values.filter(values => values.id !== index))
  const handleChange = (userValue, index) =>
    setValues(
      values.map(value => {
        if (value.id !== index) return value

        return { id: value.id, text: userValue }
      })
    )
  const handleErrors = (errors, index) => {
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
    <>
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
              onClick={handleDeletion}
            />
            <PlaceholderButton
              css={[addButton]}
              icon={''}
              isDisabled={isDisabled}
              onClick={handleAddition}
            >
              {buttonText}
            </PlaceholderButton>
          </li>
        ) : null}
      </ol>
      <div css={[listErrors]} >
        <FormErrors errors={flatErrorMessages} />
      </div>
    </>
  )
}

TextFieldList.propTypes = {
  dataType: TextField.propTypes.dataType,
  isDisabled: propTypes.bool,
  isEditable: propTypes.bool,
  initalFieldCount: propTypes.number,
  placeholder: propTypes.string,
  buttonText: propTypes.string,
  onValueChange: propTypes.func,
}
