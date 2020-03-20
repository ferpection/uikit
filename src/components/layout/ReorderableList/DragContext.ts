import { createContext } from 'react'

interface DragOptions {
  onDragStart(data: DataTransfer): void
  onDragEnd(data: DataTransfer): void
  isActive: boolean
  setActive(state: boolean): void
}

const defaultDragOptions: DragOptions = {
  onDragStart() {},
  onDragEnd() {},
  setActive() {},
  isActive: false,
}

export const DragContext = createContext(defaultDragOptions)
