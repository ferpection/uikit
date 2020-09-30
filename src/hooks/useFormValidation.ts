import { useCallback, useEffect, useReducer, useState } from 'react'

import { FormErrors } from '../components/forms/form-errors'
import { deepEqual } from '../utils/object'

interface UseFormErrorsOptions {
  externalErrors?: FormErrors
  hideErrors?: boolean
  [key: string]: any
}

interface Validator {
  (opts: { [key: string]: any }): boolean
}

const resetRulesReducer = (errors: FormErrors, newErrorName: string) => ({
  ...errors,
  [newErrorName]: false,
})

const validatorsReducer = (errors: { [key: string]: Validator }, error: { name: string; validator: Validator }) => ({
  ...errors,
  [error.name]: error.validator,
})

export default function useFormValidation({
  externalErrors: initialExternalErrors = {},
  hideErrors = false,
  value,
  ...entries
}: UseFormErrorsOptions) {
  const [externalErrors, setExternalErrors] = useState(initialExternalErrors)
  const [isValid, setValidity] = useState(true)
  const [validators, addValidator] = useReducer(validatorsReducer, {})
  const [resetRules, addResetRule] = useReducer(resetRulesReducer, {})
  const [errors, setErrors] = useState<FormErrors>({})

  const userFacingAddValidator = useCallback(
    (errorName: string, validator: Validator = () => false) => {
      if (Object.keys(validators).includes(errorName)) {
        return
      }

      addResetRule(errorName)
      addValidator({ name: errorName, validator })
    },
    [validators],
  )

  useEffect(() => {
    setExternalErrors(prev => {
      if (deepEqual(prev, initialExternalErrors)) {
        return prev
      }

      return initialExternalErrors
    })
  }, [initialExternalErrors])

  useEffect(() => {
    const internalErrors = Object.keys(validators).reduce((err, key) => {
      return {
        ...err,
        [key]: validators[key]({ ...entries, value }),
      }
    }, {})

    const cleanErrors: FormErrors = {
      ...externalErrors,
      ...resetRules,
      ...internalErrors,
    }

    for (const errorName of Object.keys(cleanErrors)) {
      if (cleanErrors[errorName] !== false) {
        continue
      }

      delete cleanErrors[errorName]
    }

    setValidity(Object.keys(cleanErrors).length <= 0)
    setErrors(prev => {
      if (deepEqual(prev, cleanErrors)) {
        return prev
      }

      return cleanErrors
    })
  }, [value, externalErrors, validators, resetRules])

  return {
    isValid,
    errors,
    showableErrors: hideErrors ? {} : errors,
    addValidator: userFacingAddValidator,
  }
}
