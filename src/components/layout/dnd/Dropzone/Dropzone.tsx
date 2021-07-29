/** @jsxImportSource @emotion/react */
import { FC, ReactChild } from 'react'
import { jsx } from '@emotion/react'

import { useDropzone } from './useDropzone'
import { container } from './styles'

export interface RenderFunctionOptions {
  elementIsOver: boolean
}

export interface DropzoneProps {
  onDrop?: (itemId: string | null, dataTransferObject: DataTransfer) => void
  onDragOver?: (dataTransferObject: DataTransfer) => void
  children: (options: RenderFunctionOptions) => ReactChild
}

export const Dropzone: FC<DropzoneProps> = props => {
  const { children, onDragOver = () => {}, onDrop = () => {} } = props
  const [events, isOver] = useDropzone({ onDragOver, onDrop })

  return (
    <div css={[container]} {...events}>
      {children({
        elementIsOver: isOver,
      })}
    </div>
  )
}
