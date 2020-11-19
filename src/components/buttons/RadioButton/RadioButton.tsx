/** @jsx jsx */
import { FC, ChangeEvent, FocusEvent } from 'react'
import { jsx } from '@emotion/core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useTheme } from '../../contexts/ThemeContext'
import { ActionType } from '../../action-type'

import {
  radioStyles,
  labelStyles,
  inputStyles,
  labelStylesDisabled,
  childrenStyles,
  radioStylesTopSticked,
  radioStylesBottomSticked,
} from './styles'

export interface RadioButtonProps {
  value: string
  isDisabled?: boolean
  isChecked?: boolean
  radioPosition?: 'top' | 'bottom' | 'center'
  actionType: ActionType
  onValueChange?: (event: ChangeEvent<HTMLInputElement>) => void
  onBlur?: (event: FocusEvent) => void
  onFocus?: (event: FocusEvent) => void
}

export const RadioButton: FC<RadioButtonProps> = props => {
  const theme = useTheme()

  const hoverColorKey = `${props.actionType}Light` as 'positiveLight' | 'negativeLight' | 'actionLight'

  const color = theme.colors[props.actionType] || theme.colors.action
  const hoverColor = theme.colors[hoverColorKey] || theme.colors.actionLight

  return (
    <label css={[labelStyles({ color }), props.isDisabled && labelStylesDisabled]}>
      <input
        css={[inputStyles]}
        type="radio"
        value={props.value}
        checked={props.isChecked}
        onChange={props.onValueChange}
        disabled={props.isDisabled}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
      />
      <div
        css={[
          radioStyles({ color, lighterColor: hoverColor }),
          props.radioPosition === 'top' && radioStylesTopSticked,
          props.radioPosition === 'bottom' && radioStylesBottomSticked,
        ]}
      >
        <FontAwesomeIcon icon={props.actionType === 'negative' ? 'times' : 'check'} fixedWidth />
      </div>
      <div css={[childrenStyles]}>{props.children}</div>
    </label>
  )
}

RadioButton.defaultProps = {
  isDisabled: false,
  radioPosition: 'center',
  actionType: 'action',
  onValueChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
}
