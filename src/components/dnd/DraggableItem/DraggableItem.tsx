import React, { FC, DragEventHandler } from 'react'

export const DraggableItem: FC<DraggableItemProps> = (props) => {
  const handleDragStart: DragEventHandler = (event) => {
    event.preventDefault()
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('application/uuid', props.itemId)

    // setDraggedId(item.uuid)
  }

  return (
    <div
      draggable
      onDragStart={handleDragStart}
    >

    </div>
  )
}

export interface DraggableItemProps {
  itemId: string
}
