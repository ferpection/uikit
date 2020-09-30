import { useEffect, useState } from 'react'

import { FormErrors } from '../components/forms/form-errors'
import { FormValue } from '../components/forms/form-props'
import { FormValidator } from '../components/forms/form-validator'
import { deepEqual } from '../utils/object'

export default function useFormValidation(value: FormValue, validators: FormValidator[] = [], hideErrors = false) {
  const [isValid, setValidity] = useState(true)
  const [errors, setErrors] = useState<FormErrors>({})

  useEffect(() => {
    const newErrors: FormErrors = validators
      .map(validator => validator(value))
      .filter(err => {
        for (const errorName of Object.keys(err)) {
          if (err[errorName] !== false) {
            continue
          }

          delete err[errorName]
        }

        return err
      })
      .reduce((err, curr) => ({ ...err, ...curr }), {})

    setValidity(Object.keys(newErrors).length <= 0)
    setErrors(prev => {
      if (deepEqual(prev, newErrors)) {
        return prev
      }

      return newErrors
    })
  }, [value, validators])

  return {
    isValid,
    errors,
    showableErrors: hideErrors ? {} : errors,
  }
}
