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

  const { isDisabled } = props

  const handleAddition = () => setValues([...values, ''])
  const handleDeletion = () => {}

  return (
    <ol css={[list]}>
      {values.map((value, i) => (
        <li key={i} css={[listItem]}>
          <Button
            css={[icon, hideAndShowIconOnHover]}
            isRaw
            icon="trash"
            onClick={handleDeletion}
          />
          <TextField isDisabled={isDisabled} value={value} />
        </li>
      ))}
      <li css={[listItem]}>
        <Button css={[icon]} isRaw icon="plus" onClick={handleDeletion} />
        <PlaceholderButton
          css={[addButton]}
          icon={''}
          isDisabled={isDisabled}
          onClick={handleAddition}
        />
      </li>
    </ol>
  )
}

OrderedFieldList.propTypes = {
  isDisabled: propTypes.bool,
}
