import React, { useState } from 'react'
import propTypes from 'prop-types'

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
  const [values, setValues] = useState([{ id: 1, text: '' }])

  const { isDisabled, isEditable } = props

  const handleAddition = () => setValues([...values, { id: values.length, text: '' }])
  const handleDeletion = (index) => setValues(values.filter(values => values.id !== index))
  const handleChange = (userValue, index) => setValues(values.map(value => {
    if (value.id !== index) return value

    return { id: value.id, text: userValue }
  }))

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
          <TextField isDisabled={isDisabled} value={value.text} onValueChange={(userValue) => handleChange(userValue, value.id)} />
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
}
