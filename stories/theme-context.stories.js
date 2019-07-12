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
        action: color('Action color', '#00BECD'),
        positive: color('Positive color', '#24D58D'),
        negative: color('Negative color', '#FEC138'),
      },
    }

    return (
      <ThemeProvider value={theme}>
        <pre>Button w/ action color:</pre>
        <Button
          icon="search"
          onClick={action('[action] clicked')}
          isFilled
        >
          Review study
        </Button>
        <pre>Button w/ positive color:</pre>
        <Button
          icon="rocket"
          actionType="positive"
          onClick={action('[positive] clicked')}
          isFilled
        >
          Launch study
        </Button>
        <pre>Button w/ negative color:</pre>
        <Button
          icon="trash"
          actionType="negative"
          onClick={action('[negative] clicked')}
          isFilled
        >
          Delete study
        </Button>
      </ThemeProvider>
    )
  })
