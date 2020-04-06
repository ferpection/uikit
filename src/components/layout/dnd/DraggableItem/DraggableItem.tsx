import React, { FC, DragEventHandler, useState } from 'react'

import { DragContext } from '../DragContext'

export const DraggableItem: FC<DraggableItemProps> = (props) => {
  const [draggable, setDraggable] = useState(true)

  const handleDragStart: DragEventHandler = (event) => {
    event.stopPropagation()
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('application/uuid', props.itemId)

    // setDraggedId(item.uuid)
  }

  const handleDefaultDragEvent: DragEventHandler = (event) => {
    event.stopPropagation()
  }

  const enableDragEvent = (dragHandle = true) => {
    if (dragHandle === true) {
      return
    }

    setDraggable(true)
  }

  const disableDragEvent = (dragHandle = true) => {
    if (dragHandle === true) {
      return
    }

    setDraggable(false)
  }

  return (
    <div
      draggable={draggable}
      onDrag={handleDefaultDragEvent}
      onDragStart={handleDragStart}
      onDragExit={handleDefaultDragEvent}
      onDragEnd={handleDefaultDragEvent}
    >
      <DragContext.Provider value={{ dragEventEnabled: draggable, enableDragEvent, disableDragEvent }}>
        {props.children}
      </DragContext.Provider>
    </div>
  )
}

export interface DraggableItemProps {
  itemId: string
}
