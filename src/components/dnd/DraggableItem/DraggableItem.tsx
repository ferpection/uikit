import React, { FC, DragEventHandler } from 'react'

export const DraggableItem: FC<DraggableItemProps> = (props) => {
  const handleDragStart: DragEventHandler = (event) => {
    event.stopPropagation()
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('application/uuid', props.itemId)

    // setDraggedId(item.uuid)
  }

  const handleDefaultDragEvent: DragEventHandler = (event) => {
    event.stopPropagation()
  }

  return (
    <div
      draggable
      onDrag={handleDefaultDragEvent}
      onDragStart={handleDragStart}
      onDragExit={handleDefaultDragEvent}
      onDragEnd={handleDefaultDragEvent}
    >
      {props.children}
    </div>
  )
}

export interface DraggableItemProps {
  itemId: string
}
