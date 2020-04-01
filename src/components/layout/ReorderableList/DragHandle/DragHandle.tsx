/** @jsx jsx */
import { FC, useContext, isValidElement, Children, cloneElement } from 'react'
import { jsx } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DragContext } from '../DragContext'

import { defaultHandle } from './styles'

export const DragHandle: FC = props => {
  const { enableDragEvent, disableDragEvent } = useContext(DragContext)
  const dragHandleProps = {
    draggable: false,
    onMouseDown: () => enableDragEvent(),
    onMouseLeave: () => disableDragEvent(),
    role: 'button',
  }

  if (isValidElement(props.children)) {
    return cloneElement(Children.only(props.children), dragHandleProps)
  }

  return (
    <span css={[defaultHandle]} {...dragHandleProps}>
      <FontAwesomeIcon icon="grip-vertical" size="sm" />
    </span>
  )
}

export default DragHandle
