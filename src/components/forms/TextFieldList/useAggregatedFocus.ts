import { useRef, useEffect, useState, SyntheticEvent } from 'react'

interface HookArgs {
  userOnFocus: (event?: SyntheticEvent) => void,
  userOnBlur: (event?: SyntheticEvent) => void,
}

export function useAggregatedFocus({ userOnFocus, userOnBlur }: HookArgs) {
  const [isFocused, setFocus] = useState(false)
  const focusRef = useRef({ timeout: null, initialRender: true })

  useEffect(() => {
    if (isFocused && !focusRef.current.initialRender) {
      userOnFocus()
    }

    if (!isFocused && !focusRef.current.initialRender) {
      userOnBlur()
    }

    focusRef.current.initialRender = false

    return () => {
      if (focusRef.current.timeout != null) {
        clearTimeout(focusRef.current.timeout)
      }
    }
  }, [isFocused])

  const handleFocus = () => {
    clearTimeout(focusRef.current.timeout)
    if (!isFocused) {
      setFocus(true)
    }
  }
  const handleBlur = () => {
    const timout = setTimeout(() => {
      if (isFocused) {
        setFocus(false)
      }
    }, 0)

    focusRef.current.timeout = timout
  }

  return [handleFocus, handleBlur]
}
