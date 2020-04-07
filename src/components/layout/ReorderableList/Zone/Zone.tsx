/** @jsx jsx */
import { jsx } from '@emotion/core'
import { FC, useContext } from 'react'

import { I18nContext } from '../../../contexts/I18nContext'

import { dropzone, dropzoneOver } from './styles'
import { Dropzone, DropzoneProps } from '../../dnd/Dropzone/Dropzone'

export const Zone: FC<ZoneProps> = props => {
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

interface ZoneProps {
  onDrop?: DropzoneProps['onDrop']
}
