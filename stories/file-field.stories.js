import React from 'react'
import { FileField } from '../src/components/index.ts'

export default {
  title: 'Components/Forms/FileField',
  component: FileField,
}

export const NormalState = () => {
  return <FileField />
}

export const HighlightedState = () => {
  return <FileField isHighlighted />
}

export const ErrorState = () => {
  return <FileField isRequired />
}

export const DisabledState = () => {
  return <FileField isDisabled />
}
