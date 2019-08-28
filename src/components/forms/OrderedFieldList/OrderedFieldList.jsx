import React, { useState } from 'react'
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

  const { isDisabled, isEditable, initalFieldCount = 1 } = props

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
          {isEditable ? (
            <Button
              css={[icon, hideAndShowIconOnHover]}
              isRaw
              icon="trash"
              onClick={() => handleDeletion(value.id)}
            />
          ) : null}
          <TextField
            isDisabled={isDisabled}
            value={value.text}
            onValueChange={userValue => handleChange(userValue, value.id)}
          />
        </li>
      ))}
      {isEditable ? (
        <li css={[listItem]}>
          <Button css={[icon]} isRaw icon="plus" onClick={handleDeletion} />
          <PlaceholderButton
            css={[addButton]}
            icon={''}
            isDisabled={isDisabled}
            onClick={handleAddition}
          />
        </li>
      ) : null}
    </ol>
  )
}

OrderedFieldList.propTypes = {
  isDisabled: propTypes.bool,
  isEditable: propTypes.bool,
  initalFieldCount: propTypes.number,
}
