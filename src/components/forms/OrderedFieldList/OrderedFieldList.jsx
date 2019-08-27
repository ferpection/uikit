import React from 'react'
import propTypes from 'prop-types'

import { TextField } from '../TextField/TextField.jsx'
import { Button } from '../../buttons/Button/Button.jsx'

import { listStyles, trashStyles, listItemStyles } from './styles'

export const OrderedFieldList = (props) => {
  const { isDisabled } = props
  const fields = ['réponse un', 'réponse deux']

  return (
    <ol css={[listStyles]}>
      {fields.map(field => (
        <li css={[listItemStyles]}>
          <span css={[trashStyles]}>
            <Button isRaw icon="trash" />
          </span>
          <TextField isDisabled={isDisabled} value={field} />
        </li>
      ))}
    </ol>
  )
}

OrderedFieldList.propTypes = {
  isDisabled: propTypes.bool,
}
