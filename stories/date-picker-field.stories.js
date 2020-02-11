import React from 'react'

import { storiesOf } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import { DatePickerField, TextField, UiKitInitializer } from '../src/components/index.ts'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr',
    resources: {
      en: {},
      fr: {},
    },

    ns: ['common'],
    defaultNS: 'common',

    debug: true,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

storiesOf('Components|Forms/DatePickerField', module)
  .addDecorator(withA11y)
  .addDecorator(withKnobs)
  .add('normal state', () => (
    <UiKitInitializer i18n={i18n}>
      <h1>DatePickerField</h1>
      <p>
        The component displays a regular {TextField.name} component and when the user click on it a datePicker is
        displayed on hover.
      </p>
      <p>Example:</p>
      <DatePickerField isSmall={boolean('is small', false)} />
      <p>
        The {DatePickerField.name} acts like a regular {TextField.name} plus some specificities.
      </p>
      <p><strong>The sample is wrapped with {UiKitInitializer.name} to handle the translation using i18next.</strong> i18next is not provided with this package. You have to install it and configure it yourself.</p>
    </UiKitInitializer>
  ))
