import { createContext } from 'react'

interface DragOptions {
  dragEventEnabled: boolean
  enableDragEvent(): void
  disableDragEvent(): void
}

const defaultDragOptions: DragOptions = {
  enableDragEvent() {},
  disableDragEvent() {},
  dragEventEnabled: false,
}

export const DragContext = createContext(defaultDragOptions)
