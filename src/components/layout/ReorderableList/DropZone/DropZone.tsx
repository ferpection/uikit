/** @jsx jsx */
import { FC, useState, useContext } from 'react'
import { jsx } from '@emotion/core'

import { I18nContext } from '../../../contexts/I18nContext'

import { dropzone, dropzoneOver } from './styles'

export const DropZone: FC<DropZoneProps> = props => {
  const { onDrop = () => {} } = props
  const [mouseIsOver, setOverState] = useState(false)
  const { t } = useContext(I18nContext)

  return (
    <div
      css={[dropzone, mouseIsOver ? dropzoneOver : null]}
      onDragOver={event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = 'move'

        setOverState(true)
      }}
      onDragEnter={event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = 'move'

        setOverState(true)
      }}
      onDragLeave={event => {
        event.preventDefault()
        event.dataTransfer.dropEffect = 'none'

        setOverState(false)
      }}
      onDrop={event => {
        event.preventDefault()
        onDrop(event.dataTransfer)
      }}
    >
      {mouseIsOver ? t('dropzone-hover-text') : t('dropzone-text')}
    </div>
  )
}

export default DropZone

interface DropZoneProps {
  onDrop?: (dataTransfert: DataTransfer) => void
}
