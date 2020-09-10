/** @jsx jsx */
import { FC, DragEventHandler, useState, useCallback, MouseEventHandler } from 'react'
import { jsx } from '@emotion/core'

import { DragContext } from '../DragContext'

import { container, grabCursor } from './styles'

export interface DraggableItemProps {
  itemId: string
  useExternalDragHandle?: boolean
  onDragStatusChange?: (status: string) => void
}

export const DraggableItem: FC<DraggableItemProps> = props => {
  const { useExternalDragHandle = false, onDragStatusChange = () => {} } = props
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

  const handleDragStart: DragEventHandler = event => {
    event.stopPropagation()

    event.dataTransfer.clearData()

    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('application/uuid', props.itemId)

    onDragStatusChange(event.type)
  }

  const handleDefaultDragEvent: DragEventHandler = event => {
    event.preventDefault()
    event.stopPropagation()

    if (event.type === 'dragend' && event.dataTransfer.dropEffect === 'none') {
      onDragStatusChange('canceled')
      return
    }

    onDragStatusChange(event.type)
  }

  const handleMouseLeave: MouseEventHandler = event => {
    event.stopPropagation()

    memoizedDisableDragEvent()
  }

  return (
    <div
      key={`draggable-item-${props.itemId}`}
      css={[container, !useExternalDragHandle ? grabCursor : null]}
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
