/** @jsx jsx */
import { FC } from 'react'
import { jsx } from '@emotion/core'

import { container } from './styles'

const DraggableItem: FC<DraggableItemProps> = props => {
  const { children, onDragStart = () => {}, onDragEnd = () => {} } = props

  return (
    <div
      css={[container]}
      draggable
      onDragStart={event => onDragStart(event.dataTransfer)}
      onDragEnd={event => onDragEnd(event.dataTransfer)}
    >
      {children}
    </div>
  )
}

export default DraggableItem

export interface DraggableItemProps {
  onDragStart?: (dataTransfert: DataTransfer) => void
  onDragEnd?: (dataTransfert: DataTransfer) => void
}
