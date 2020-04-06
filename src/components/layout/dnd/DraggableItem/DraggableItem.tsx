import React, { FC, DragEventHandler, useState, useCallback, MouseEventHandler } from 'react'

import { DragContext } from '../DragContext'

export const DraggableItem: FC<DraggableItemProps> = (props) => {
  const { useExternalDragHandle = false } = props
  const [draggable, setDraggable] = useState(!useExternalDragHandle)

  const enableDragEvent = (useExternalDragHandle = false) => {
    if (!useExternalDragHandle) {
      return
    }

    setDraggable(true)
  }

  const disableDragEvent = (useExternalDragHandle = false) => {
    if (!useExternalDragHandle) {
      return
    }

    setDraggable(false)
  }

  const memoizedEnableDragEvent = useCallback(() => enableDragEvent(useExternalDragHandle), [useExternalDragHandle])
  const memoizedDisableDragEvent = useCallback(() => disableDragEvent(useExternalDragHandle), [useExternalDragHandle])

  const handleDragStart: DragEventHandler = (event) => {
    event.stopPropagation()
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('application/uuid', props.itemId)

    // setDraggedId(item.uuid)
  }

  const handleDefaultDragEvent: DragEventHandler = (event) => {
    event.stopPropagation()
  }

  const handleMouseLeave: MouseEventHandler = (event) => {
    event.stopPropagation()

    memoizedDisableDragEvent()
  }

  return (
    <div
      draggable={draggable}
      onDrag={handleDefaultDragEvent}
      onDragStart={handleDragStart}
      onDragExit={handleDefaultDragEvent}
      onDragEnd={handleDefaultDragEvent}
      onMouseLeave={handleMouseLeave}
    >
      <DragContext.Provider
        value={{
          dragEventEnabled: draggable,
          enableDragEvent: memoizedEnableDragEvent,
          disableDragEvent: memoizedDisableDragEvent,
        }}
      >
        {props.children}
      </DragContext.Provider>
    </div>
  )
}

export interface DraggableItemProps {
  itemId: string
  useExternalDragHandle?: boolean
}
