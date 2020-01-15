import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import { FontsLoader, ThematicSection, HelpBlock } from '../src/components'

storiesOf('Utils|FontsLoader', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('basic example', () => (
    <>
      <FontsLoader />
      <p>See how is the police when the FontLoader component is used</p>
      <ThematicSection title="Example section" badgeIcon="config">
        <HelpBlock question="What's the text to show">
          <p>Text of the help</p>
          <ul>
            <li>an item</li>
            <li>another item</li>
          </ul>
        </HelpBlock>
      </ThematicSection>
    </>
  ))
