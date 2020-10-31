import { useState } from 'react'

const ONLY_NUMBERS = /^-?\d+(?:\.\d*)?$/
const BAD_CHARACTER = /\D/g

const removeExceptSign = (badString: string, offset: number) => {
  if (badString === '-' && offset === 0) {
    return '-'
  }

  if (badString === '.') {
    return '.'
  }

  return ''
}

/**
 * Manage a state which represent a number. Ensure the saved string only contain a number.
 * Automatically remove non wanted parts like letters, symboles, etc..
 *
 * @param initialValue a string containing a number
 *
 * @returns an array containing the state and its dispatch function
 */
export function useSamenessNumberState(initialValue: string): [string, (value: string) => void] {
  const [value, setValue] = useState(initialValue)

  const setValueWithValidation = (value: string) => {
    setValue(value)

    if (!ONLY_NUMBERS.test(value)) {
      setTimeout(() => {
        const stringWithValidChar = value.replace(BAD_CHARACTER, removeExceptSign)
        const isFloat = stringWithValidChar.indexOf('.') > -1
        const [integer, decimal = ''] = stringWithValidChar.split('.')

        let numberString = integer
        if (isFloat) {
          numberString += `.${decimal}`
        }

        setValue(numberString)
      }, 1)
    }
  }

  return [value, setValueWithValidation]
}
