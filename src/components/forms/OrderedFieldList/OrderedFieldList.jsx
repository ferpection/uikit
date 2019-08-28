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
} from './styles'

export const OrderedFieldList = props => {
  const [values, setValues] = useState([])
  const { onValueChange = () => {} } = props

  useEffect(() => onValueChange(values.map(value => value.text)), [values])

  const {
    isDisabled,
    isEditable,
    placeholder,
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

  if (values.length < initalFieldCount) {
    for (let index = values.length - 1; index < initalFieldCount; index++) {
      handleAddition()
    }
  }

  return (
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
            placeholder={placeholder}
            value={value.text}
            isDisabled={isDisabled}
            onValueChange={userValue => handleChange(userValue, value.id)}
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
  )
}

OrderedFieldList.propTypes = {
  isDisabled: propTypes.bool,
  isEditable: propTypes.bool,
  initalFieldCount: propTypes.number,
  placeholder: propTypes.string,
  buttonText: propTypes.string,
  onValueChange: propTypes.func,
}
