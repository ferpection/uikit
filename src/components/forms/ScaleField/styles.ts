import { css } from '@emotion/react'

import { N100_COLOR, N300_COLOR, N75_COLOR } from '../../../colors/colors'
import { Theme } from '../../../contexts/ThemeContext'

export const baseStyles = css({
  display: 'inline flex',
  justifyContent: 'stretch',
  borderRadius: '3px',
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
    margin: 0,
    borderWidth: '1px 0 1px 1px',
    borderStyle: 'solid',
    borderColor: N75_COLOR.toRGB(),
    color: N300_COLOR.toRGB(),
    backgroundColor: 'white',
    cursor: 'pointer',
    fontSize: '1em',
    fontWeight: 600,
    transition: 'all 0.2s ease-in-out',

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

    '&:focus': {
      borderColor: theme.colors.action.toString(),
      boxShadow: `0 0 0 8px ${theme.colors.action.toRGBA(0.1)}`,
      outline: 'none',
      zIndex: 1,

      '& + button': {
        borderLeftColor: theme.colors.action.toString(),
      },
    },

    '&:active': {
      boxShadow: `0 0 0 16px ${theme.colors.action.toRGBA(0.1)}`,
    },

    '&:hover': {
      borderColor: theme.colors.action.toRGBA(0.5),
      boxShadow: `0 0 0 8px ${theme.colors.action.toRGBA(0.1)}`,
      zIndex: 2,

      '& + button': {
        borderLeftColor: theme.colors.action.toRGBA(0.5),
      },
    },
  })

export const errorItemStyles = (theme: Theme) =>
  css({
    '&[data-error=true]': {
      borderColor: theme.colors.negative.toString(),
      backgroundColor: theme.colors.negativeLight.toString(),
      boxShadow: `0 0 0 1px ${theme.colors.negative.toString()}`,
      '& + button': {
        borderColor: theme.colors.negative.toString(),
      },
      '&:hover': {
        boxShadow: `0 0 0 8px ${theme.colors.negative.toRGBA(0.1)}`,
        zIndex: 2,
      },
      '&:focus': {
        backgroundColor: theme.colors.actionLight.toString(),
        borderColor: theme.colors.action.toString(),
        boxShadow: `0 0 0 8px ${theme.colors.action.toRGBA(0.1)}`,
      },
    },
  })

export const disabledItemState = (theme: Theme) =>
  css({
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

      '&:hover': {
        boxShadow: 'none',
      },
    },
  })
