import { useRef, useEffect, useState, SyntheticEvent } from 'react'

interface UniqueFocusHandlers {
  onFocus?: (event?: SyntheticEvent) => void
  onBlur?: (event?: SyntheticEvent) => void
}

/**
 * Simplify the focus handling for composite components.
 * It makes several field act like on field for the focus and blur event.
 *
 * @param options - All the options as an object
 * @param options.onFocus - The unique handler for the focus event
 * @param options.onBlur - The unique handler for the blur event
 *
 * @returns The merged handlers for the focus and blur event as a tuple
 */
export function useMergedFocusHandlers({
  onFocus = () => {},
  onBlur = () => {},
}: UniqueFocusHandlers): [() => void, () => void] {
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
