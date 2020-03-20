import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DragContext } from '../DragContext'

export const DragHandle = () => {
  const { enableDragEvent, disableDragEvent } = useContext(DragContext)

  return (
    <div draggable={false} onMouseDown={() => enableDragEvent()} onMouseLeave={() => disableDragEvent()} >
      <FontAwesomeIcon icon="grip-vertical" size="sm" />
    </div>
  )
}

export default DragHandle
