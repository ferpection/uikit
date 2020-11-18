import React from 'react'

import { FileField, UiKitInitializer } from '../../src/components/index.ts'

export default {
  title: 'Components/Forms/FileField',
  component: FileField,
}

export const NormalState = () => {
  return (
    <UiKitInitializer>
      <FileField onValueChange={files => console.log(files)} />
    </UiKitInitializer>
  )
}

export const MultipleFilesState = () => {
  return (
    <UiKitInitializer>
      <FileField isMultiple onValueChange={files => console.log(files)} />
    </UiKitInitializer>
  )
}

export const HighlightedState = () => {
  return (
    <UiKitInitializer>
      <FileField isHighlighted />
    </UiKitInitializer>
  )
}

export const ErrorState = () => {
  return (
    <UiKitInitializer>
      <FileField isRequired />
    </UiKitInitializer>
  )
}

export const DisabledState = () => {
  return (
    <UiKitInitializer>
      <FileField isDisabled />
    </UiKitInitializer>
  )
}
