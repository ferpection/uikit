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
  const [values, setValues] = useState([''])

  const { isDisabled, isEditable } = props

  const handleAddition = () => setValues([...values, ''])
  const handleDeletion = (index) => setValues(values.filter((_v, i) => i !== index))

  return (
    <ol css={[list]}>
      {values.map((value, i) => (
        <li key={i} css={[listItem]}>
          {isEditable ? (
            <Button
              css={[icon, hideAndShowIconOnHover]}
              isRaw
              icon="trash"
              onClick={() => handleDeletion(i)}
            />
          ) : null}
          <TextField isDisabled={isDisabled} value={value} />
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
