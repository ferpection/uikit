/** @jsx jsx */
import { jsx } from '@emotion/core'
import { FC, useContext } from 'react'

import { I18nContext } from '../../../contexts/I18nContext'

import { dropzone, dropzoneOver } from './styles'
import { Dropzone } from '../../dnd/Dropzone/Dropzone'

export const Zone: FC<DropZoneProps> = props => {
  const { onDrop = () => {} } = props
  const { t } = useContext(I18nContext)

  return (
    <Dropzone onDrop={onDrop}>
      {({ elementIsOver }) => (
        <div css={[dropzone, elementIsOver ? dropzoneOver : null]} >
          {elementIsOver ? t('dropzone-hover-text') : t('dropzone-text')}
        </div>
      )}
    </Dropzone>
  )
}

export default Zone

interface DropZoneProps {
  onDrop?: (dataTransfert: DataTransfer) => void
}
