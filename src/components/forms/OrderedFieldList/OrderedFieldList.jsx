import React from 'react'
import propTypes from 'prop-types'

import { TextField } from '../TextField/TextField'

import { listStyle } from './styles'

export const OrderedFieldList = (props) => {
  const { isDisabled } = props

  return (
    <ol css={[listStyle]}>
      <li><TextField isDisabled={isDisabled} /></li>
      <li><TextField isDisabled={isDisabled} /></li>
    </ol>
  )
}

OrderedFieldList.propTypes = {
  isDisabled: propTypes.bool,
}
