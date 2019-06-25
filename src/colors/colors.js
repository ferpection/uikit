/* Reds */
export const R400_COLOR = '#ED4A4A'
export const R300_COLOR = '#FF5D5D'

/* Teals */
export const T500_COLOR = '#008D94'
export const T300_COLOR = '#00BECD'

/* Greens */
export const G200_COLOR = '#24D58D'

/* Yellows */
export const Y500_COLOR = '#FC883A'
export const Y300_COLOR = '#FEC138'
export const Y100_COLOR = '#FFF173'

/* Purples */
export const P400_COLOR = '#9654CB'

/* Blues */
export const B400_COLOR = '#4A9CED'
export const B100_COLOR = '#E5F1F0'

export const PRIMARY_COLORSET = Object.freeze({
  FERPECTION_RED: R400_COLOR,
  ACTION_BLUE: T300_COLOR,
  GREEN: G200_COLOR,
  ORANGE: T300_COLOR,
})

export const SECONDARY_COLORSET = Object.freeze({
  PURPLE: P400_COLOR,
  BLUE: B400_COLOR,
  ORANGE: Y500_COLOR,
  TILE: T500_COLOR,
  COLOURED_GREY: B100_COLOR,
  YELLOW: Y100_COLOR,
})

export const FULL_COLORSET = Object.freeze({
  ...PRIMARY_COLORSET,
  ...SECONDARY_COLORSET,
  RED_BACKGROUND: R300_COLOR,
})
