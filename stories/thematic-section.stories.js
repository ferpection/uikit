import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs } from '@storybook/addon-knobs'

import { ThematicSection, Button, TextFieldList } from '../src/components/index.js'

storiesOf('Layout|ThematicSection', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('with actions buttons', () => (
    <ThematicSection title="Questions de qualification" actions={<Button icon="comment-medical" isDisabled isRaw />} />
  ))
  .add('with form components', () => (
    <ThematicSection title="Questions de qualification">
      <p>
        Consequat culpa qui enim laboris voluptate proident tempor cillum laboris est ex sint id. Anim tempor exercitation amet consequat et excepteur ex. In anim occaecat adipisicing velit Lorem. Est sunt excepteur ut laborum commodo qui sit veniam tempor nulla cillum adipisicing. Do ipsum culpa excepteur mollit.
      </p>
      <TextFieldList placeholder="Choix.." isEditable />
    </ThematicSection>
  ))
