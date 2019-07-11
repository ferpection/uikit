import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, color } from '@storybook/addon-knobs'

import { Button } from '../src/components/index.js'
import { ThemeProvider } from '../src/components/contexts/ThemeContext.js'

storiesOf('Contexts|ThemeProvider', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('colors', () => {
    const theme = {
      colors: {
        action: color('Default color', '#00BECD'),
        positive: color('Positive color', '#24D58D'),
        negative: color('Negative color', '#FEC138'),
      },
    }

    return (
      <ThemeProvider value={theme}>
        <pre>Button w/ default color:</pre>
        <Button
          onClick={action('[default] clicked')}
          isFilled
        >
          Action
        </Button>
        <pre>Button w/ positive color:</pre>
        <Button
          actionType="positive"
          onClick={action('[positive] clicked')}
          isFilled
        >
          Action
        </Button>
        <pre>Button w/ negative color:</pre>
        <Button
          actionType="negative"
          onClick={action('[negative] clicked')}
          isFilled
        >
          Action
        </Button>
      </ThemeProvider>
    )
  })
