/** @jsx jsx */
import { FC, useContext, isValidElement, Children, cloneElement } from 'react'
import { jsx } from '@emotion/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DragContext } from '../DragContext'

import { defaultHandle, draggingStyle } from './styles'

export const DragHandle: FC = props => {
  const { enableDragEvent, dragEventEnabled, disableDragEvent } = useContext(DragContext)
  const dragHandleProps = {
    role: 'button',
    draggable: false,
    onMouseDown: () => enableDragEvent(),
    onMouseLeave: () => {},
  }

  if (isValidElement(props.children)) {
    dragHandleProps.onMouseLeave = () => disableDragEvent()
    return cloneElement(Children.only(props.children), dragHandleProps)
  }

  return (
    <div css={[defaultHandle, dragEventEnabled ? draggingStyle : null]} {...dragHandleProps}>
      <FontAwesomeIcon icon="grip-vertical" size="sm" />
    </div>
  )
}

export default DragHandle
