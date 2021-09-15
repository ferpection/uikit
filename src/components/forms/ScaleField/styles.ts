import { css } from '@emotion/react'

import { N100_COLOR, N300_COLOR, N75_COLOR } from '../../..'
import { Theme } from '../../../contexts/ThemeContext'

export const baseStyles = css({
  display: 'inline flex',
  justifyContent: 'stretch',
})

export const itemStyles = (theme: Theme) =>
  css({
    appearance: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    minHeight: '45px',
    padding: '10px 5px',
    borderWidth: '1px 0 1px 1px',
    borderStyle: 'solid',
    borderColor: N75_COLOR.toRGB(),
    color: N300_COLOR.toRGB(),
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '1em',
    fontWeight: 600,

    '&[data-selected=true]': {
      borderColor: theme.colors.action.toRGBA(0.5),
      color: theme.colors.action.toRGB(),
      backgroundColor: theme.colors.actionLight.toRGBA(0.8),

      '& + button': {
        borderLeftColor: theme.colors.action.toRGBA(0.5),
      },
    },

    '&:first-of-type': {
      borderTopLeftRadius: '3px',
      borderBottomLeftRadius: '3px',
    },

    '&:last-of-type': {
      borderTopRightRadius: '3px',
      borderBottomRightRadius: '3px',
      borderRightWidth: '1px',
    },

    '&:hover': {
      borderColor: theme.colors.action.toRGBA(0.5),

      '& + button': {
        borderLeftColor: theme.colors.action.toRGBA(0.5),
      },
    },

    '&[disabled]': {
      borderColor: N100_COLOR.toString(),
      backgroundColor: '#f8f8f8',
      cursor: 'not-allowed',

      '&[data-selected=true]': {
        backgroundColor: theme.colors.actionLight.toRGBA(0.8),
      },

      '& + button': {
        borderColor: N100_COLOR.toString(),
      },
    },
  })
