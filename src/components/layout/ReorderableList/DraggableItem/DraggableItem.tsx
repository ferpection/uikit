/** @jsx jsx */
import { FC, useState } from 'react'
import { jsx } from '@emotion/core'

import { container } from './styles'
import { DragContext } from '../DragContext'

const DraggableItem: FC<DraggableItemProps> = props => {
  const { children, onDragStart = () => {}, onDragEnd = () => {}, isDragHandle = true } = props
  const [draggable, setDraggable] = useState(false)

  return (
    <div
      css={[container]}
      draggable={draggable}
      onDragStart={event => onDragStart(event.dataTransfer)}
      onDragEnd={event => onDragEnd(event.dataTransfer)}
    >
      <DragContext.Provider value={{ onDragStart, onDragEnd, isActive: isDragHandle, setActive: setDraggable }}>
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
