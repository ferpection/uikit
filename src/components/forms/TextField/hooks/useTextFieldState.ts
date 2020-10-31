import { useState } from 'react'

import { useSamenessNumberState } from '../../../../hooks/useSamenessNumberState'

import { DataType } from '../types'

export function useTextFieldState(initialValue: string, fieldType: DataType) {
  const normalState = useState(initialValue)
  const numberState = useSamenessNumberState(initialValue)

  if (fieldType === 'number') {
    return numberState
  }

  return normalState
}
