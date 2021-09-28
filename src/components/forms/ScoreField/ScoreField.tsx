import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'
import { useMergedFocusHandlers } from '../../..'
import useFormValidation from '../../../hooks/useFormValidation'

import { useTheme } from '../../../hooks/useTheme'
import { defaultFormProps, FormProps } from '../form-props'
import { shouldColorStar } from './shouldColorStar'

import { shouldFillStar } from './shouldFillStar'
import { baseStyles, disabledItemState, itemStyles } from './styles'

interface ScoreFieldProps extends FormProps {
  value?: number
  range?: [number, number]
  placeholder?: never
  onValueChange?: (value: number) => void
  alwaysShowSelected?: boolean
}

export function ScoreField(props: ScoreFieldProps) {
  const {
    value: initialValue,
    range: [minValue = 0, maxValue = 10] = [],
    alwaysShowSelected = false,
    validators = [],
    isDisabled = false,
    isRequired = false,
    onValueChange = () => {},
    onErrors = () => {},
    onFocus = () => {},
    onBlur = () => {},
    ...otherProps
  } = props
  const choices = Array.from({ length: maxValue - minValue + 1 }, (_, i) => minValue + i)

  const theme = useTheme()
  const [value, setValue] = useState(initialValue)
  const [choiceOvered, setChoiceOver] = useState(-1)
  const { isValid, errors } = useFormValidation(
    value,
    [(v: number) => ({ 'uikit:required': isRequired && (v == null || isNaN(v)) }), ...validators],
    false,
  )
  const [handleFocus, handleBlur] = useMergedFocusHandlers({
    onFocus,
    onBlur,
  })

  useEffect(() => setValue(initialValue), [initialValue])
  useEffect(() => onValueChange(value), [value])
  useEffect(() => onErrors(errors), [errors])

  return (
    <div css={[baseStyles]}>
      {choices.map(choice => (
        <button
          key={choice}
          css={[itemStyles(theme), disabledItemState(theme)]}
          data-error={!isValid}
          data-colored={shouldColorStar(choice, value, choiceOvered, { componentDisabled: isDisabled })}
          data-maxed={value >= choices[choices.length - 1]}
          disabled={isDisabled}
          onClick={() => setValue(choice)}
          onMouseOver={() => setChoiceOver(choice)}
          onMouseOut={() => setChoiceOver(-1)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...otherProps}
        >
          <FontAwesomeIcon
            icon={[
              shouldFillStar(choice, value, choiceOvered, { componentDisabled: isDisabled, alwaysShowSelected })
                ? 'fas'
                : 'far',
              'star',
            ]}
          />
        </button>
      ))}
    </div>
  )
}

ScoreField.defaultProps = {
  ...defaultFormProps,
  range: [1, 10],
  value: undefined,
  placeholder: undefined,
  alwaysShowSelected: false,
}
