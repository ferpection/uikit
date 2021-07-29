import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, boolean, text } from '@storybook/addon-knobs'

import { Button, UiKitInitializer } from '../../src/components/index.ts'

storiesOf('Components/Button/Button', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('with text', () => (
    <UiKitInitializer>
      <Button onClick={action('clicked')} isDisabled={boolean('disabled', false)} isFilled={boolean('filled', false)}>
        {text('label', 'Action')}
      </Button>
    </UiKitInitializer>
  ))
  .add('with text and icon', () => (
    <UiKitInitializer>
      <Button
        icon={text('icon', 'arrow-left')}
        iconStore={text('icon store', 'fas')}
        onClick={action('clicked')}
        isDisabled={boolean('disabled', false)}
        isFilled={boolean('filled', false)}
      >
        {text('label', 'Action')}
      </Button>
    </UiKitInitializer>
  ))
  .add('with icon only', () => (
    <UiKitInitializer>
      <Button
        icon={text('icon', 'instagram')}
        iconStore={text('icon store', 'fab')}
        onClick={action('clicked')}
        isDisabled={boolean('disabled', false)}
        isFilled={boolean('filled', false)}
      />
    </UiKitInitializer>
  ))
  .add('as row link', () => (
    <UiKitInitializer>
      <Button
        icon="twitter"
        iconStore="fab"
        onClick={action('clicked')}
        isDisabled={boolean('disabled', false)}
        isFilled={boolean('filled', false)}
        isRaw={boolean('raw', true)}
      >
        Tweet it!
      </Button>
    </UiKitInitializer>
  ))
