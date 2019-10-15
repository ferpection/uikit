import { useRef, useEffect, useState, SyntheticEvent } from 'react'

interface PublicFocusHandlers {
  onFocus?: (event?: SyntheticEvent) => void
  onBlur?: (event?: SyntheticEvent) => void
}

/**
 * Simplify the focus handling for composite components.
 * It makes several field act like on field for the focus and blur event.
 *
 * @param options - All the options
 * @param options.onFocus - The public handler triggered when user enters a field
 * @param options.onBlur - The public handler triggered when user leaves a field
 *
 * @returns The private handlers for the focus and blur event as a tuple
 */
export function useMergedFocusEvents({
  onFocus = () => {},
  onBlur = () => {},
}: PublicFocusHandlers): [() => void, () => void] {
  const [isFocused, setFocus] = useState(false)
  const focusRef = useRef({ timeout: null, initialRender: true })

  useEffect(() => {
    if (isFocused && !focusRef.current.initialRender) {
      onFocus()
    }

    if (!isFocused && !focusRef.current.initialRender) {
      onBlur()
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
    }, 1)

    focusRef.current.timeout = timout
  }

  return [handleFocus, handleBlur]
}
