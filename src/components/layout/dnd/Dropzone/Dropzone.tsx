/** @jsx jsx */
import { FC, ReactChild } from 'react'
import { jsx } from '@emotion/core'

import { useDropzone } from './useDropzone'
import { container } from './styles'

export const Dropzone: FC<DropzoneProps> = (props) => {
  const { onDrop = () => {}, children } = props
  const [events, isOver] = useDropzone(onDrop)

  return (
    <div css={[container]} {...events}>
      {children({
        elementIsOver: isOver,
      })}
    </div>
  )
}

export interface DropzoneProps {
  onDrop?: (DataTransfer: DataTransfer) => void,
  children: (options: RenderFunctionOptions) => ReactChild,
}

export interface RenderFunctionOptions {
  elementIsOver: boolean,
}
