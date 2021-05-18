import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, text } from '@storybook/addon-knobs'

import { Button, ThemeProvider, TextFieldList, TextField } from '../../src/components/index.ts'
import { FULL_COLORSET, Color } from '../../src/colors/index.ts'

storiesOf('Contexts/ThemeProvider', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('colors', () => {
    const theme = {
      colors: {
        action: Color.fromHex(text('action color', FULL_COLORSET.ROBINS_EGG_BLUE.toHex())),
        actionLight: Color.fromHex(text('action color light', FULL_COLORSET.BLACK_SQUEEZE.toHex())),
        positive: Color.fromHex(text('positive color', FULL_COLORSET.SHAMROCK.toHex())),
        positiveLight: Color.fromHex(text('positive color light', FULL_COLORSET.WHITE_ICE.toHex())),
        negative: Color.fromHex(text('negative color', FULL_COLORSET.SUNGLOW.toHex())),
        negativeLight: Color.fromHex(text('negative color light', FULL_COLORSET.FLORAL_WHITE.toHex())),
      },
    }

    return (
      <ThemeProvider theme={theme}>
        <pre>Button w/ action color:</pre>
        <Button icon="search" onClick={action('[action] clicked')} isFilled>
          Review study
        </Button>
        <pre>Button w/ positive color:</pre>
        <Button icon="rocket" actionType="positive" onClick={action('[positive] clicked')} isFilled>
          Launch study
        </Button>
        <pre>Button w/ negative color:</pre>
        <Button icon="trash" actionType="negative" onClick={action('[negative] clicked')} isFilled>
          Delete study
        </Button>
        <pre>TextField:</pre>
        <TextField isRequired />
        <pre>TextFieldList:</pre>
        <TextFieldList isRequired isEditable />
      </ThemeProvider>
    )
  })
