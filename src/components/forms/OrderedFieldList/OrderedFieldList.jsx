import React, { useState } from 'react'
import propTypes from 'prop-types'

import { TextField } from '../TextField/TextField.jsx'
import { Button } from '../../buttons/Button/Button.jsx'

import { listStyles, trashStyles, listItemStyles } from './styles'

export const OrderedFieldList = (props) => {
  const [values, setValues] = useState([''])

  const { isDisabled } = props

  const handleAddition = () => setValues([...values, ''])
  const handleDeletion = () => {}

  return (
    <ol css={[listStyles]}>
      {values.map((value, i) => (
        <li key={i} css={[listItemStyles]}>
          <span css={[trashStyles]}>
            <Button isRaw icon="trash" onClick={handleDeletion} />
          </span>
          <TextField isDisabled={isDisabled} value={value} />
        </li>
      ))}
      <Button icon="plus" onClick={handleAddition}>Ajouter</Button>
    </ol>
  )
}

OrderedFieldList.propTypes = {
  isDisabled: propTypes.bool,
}
