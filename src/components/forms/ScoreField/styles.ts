import { css } from '@emotion/react'

import { N100_COLOR } from '../../../colors/colors'
import { Theme } from '../../../contexts/ThemeContext'

export const baseStyles = css({
  display: 'inline flex',
  justifyContent: 'stretch',
})

export const itemStyles = (theme: Theme) =>
  css({
    appearance: 'none',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    borderWidth: 0,
    padding: 0,
    backgroundColor: 'transparent',
    color: '#ccc',
    fontSize: '2.5em',
    transition: 'all .2s',

    '&[data-colored=true]': {
      color: theme.colors.negative.toString(),

      '&[data-maxed=true]': {
        color: theme.colors.positive.toString(),
        textShadow: `0 0 20px ${theme.colors.positive.toString()}`,
      },
    },
  })

export const disabledItemState = (theme: Theme) =>
  css({
    '&[disabled]': {
      color: N100_COLOR.toString(),
      cursor: 'not-allowed',

      '&[data-colored=true]': {
        color: theme.colors.negative.toRGBA(0.8),

        '&[data-maxed=true]': {
          color: theme.colors.positive.toRGBA(0.8),
        },
      },

      '&:hover': {
        boxShadow: 'none',
      },
    },
  })
