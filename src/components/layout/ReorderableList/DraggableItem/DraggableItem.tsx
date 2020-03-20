/** @jsx jsx */
import { FC, useState } from 'react'
import { jsx } from '@emotion/core'

import { container } from './styles'
import { DragContext } from '../DragContext'

const DraggableItem: FC<DraggableItemProps> = props => {
  const { children, onDragStart = () => {}, onDragEnd = () => {}, isDragHandle = true } = props
  const [draggable, setDraggable] = useState(isDragHandle)

  return (
    <div
      css={[container]}
      draggable={draggable}
      onDragStart={event => onDragStart(event.dataTransfer)}
      onDragEnd={event => onDragEnd(event.dataTransfer)}
    >
      <DragContext.Provider
        value={{
          dragEventEnabled: draggable,
          enableDragEvent: () => !isDragHandle && setDraggable(true),
          disableDragEvent: () => !isDragHandle && setDraggable(false),
        }}
      >
        {children}
      </DragContext.Provider>
    </div>
  )
}

export default DraggableItem

export interface DraggableItemProps {
  onDragStart?: (dataTransfert: DataTransfer) => void
  onDragEnd?: (dataTransfert: DataTransfer) => void
  isDragHandle?: boolean
}
