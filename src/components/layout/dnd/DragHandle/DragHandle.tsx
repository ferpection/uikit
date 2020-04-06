/** @jsx jsx */
import { FC, useContext, isValidElement, Children, cloneElement } from 'react'
import { jsx } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DragContext } from '../DragContext'

import { defaultHandle, draggingStyle } from './styles'

export const DragHandle: FC = props => {
  const { enableDragEvent, dragEventEnabled } = useContext(DragContext)
  const dragHandleProps = {
    draggable: false,
    onMouseDown: () => enableDragEvent(),
    // onMouseLeave: (event: MouseEvent) => {event.stopPropagation(); disableDragEvent()},
    role: 'button',
  }

  if (isValidElement(props.children)) {
    return cloneElement(Children.only(props.children), dragHandleProps)
  }

  return (
    <div css={[defaultHandle, dragEventEnabled ? draggingStyle : null]} {...dragHandleProps}>
      <FontAwesomeIcon icon="grip-vertical" size="sm" />
    </div>
  )
}

export default DragHandle
