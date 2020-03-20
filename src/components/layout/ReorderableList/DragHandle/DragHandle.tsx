import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { DragContext } from '../DragContext'

export const DragHandle = () => {
  const { setActive } = useContext(DragContext)

  return (
    <div draggable={false} onMouseDown={() => setActive(true)} onMouseLeave={() => setActive(false)} >
      <FontAwesomeIcon icon="grip-vertical" size="sm" />
    </div>
  )
}

export default DragHandle
