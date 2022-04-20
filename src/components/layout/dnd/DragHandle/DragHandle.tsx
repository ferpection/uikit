import { FC, useContext, isValidElement, Children, cloneElement, PropsWithChildren } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DragContext } from '../DragContext'

import { defaultHandle, draggingStyle } from './styles'

export function DragHandle(props: PropsWithChildren<{}>) {
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
