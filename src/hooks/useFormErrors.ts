import { useEffect, useReducer, useState } from 'react'
import { FormErrors } from '../components/forms/form-errors'

interface UseFormErrorsOptions {
  externalErrors?: FormErrors,
  hideErrors?: boolean,
  [key: string]: any,
}

interface Validator {
  (opts: { [key: string]: any }): boolean
}

const resetRulesReducer = (errors: FormErrors, newErrorName: string) => ({
  ...errors,
  [newErrorName]: false
})


const validatorsReducer = (errors: { [key: string]: Validator }, error: { name: string, validator: Validator}) => ({
  ...errors,
  [error.name]: error.validator
})

export default function useFormErrors({ externalErrors = {}, hideErrors = false, value, ...entries }: UseFormErrorsOptions) {
  const [isValid, setValidity] = useState(true)
  const [validators, addValidator] = useReducer(validatorsReducer, {})
  const [resetRules, addResetRule] = useReducer(resetRulesReducer, {})
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const internalErrors = Object.keys(validators).reduce((err, key) => {
      return {
        ...err,
        [key]: validators[key]({ ...entries, value})
      }
    }, {})

    const cleanErrors = {
      ...externalErrors,
      ...resetRules,
      ...internalErrors,
    }

    setValidity(Object.keys(cleanErrors).length <= 0)
    setErrors(prevErrors => prevErrors != cleanErrors ? cleanErrors : prevErrors)
  }, [value])

  const addError = (errorName: string, validator: Validator = () => false) => {
    if (Object.keys(validators).includes(errorName)) {
      return
    }

    addResetRule(errorName)
    addValidator({ name: errorName, validator })
  }

  return {
    isValid,
    errors,
    showableErrors: hideErrors ? {} : errors,
    addError
  }
}
