import React from 'react'

import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import { DatePickerField, UiKitInitializer } from '../src/components/index.ts'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
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

export default {
  title: 'Components/Forms/DatePickerField',
  component: DatePickerField,
  decorators: [withA11y, withKnobs],
}

export const NormalState = () => {
  const isSmall = boolean('is small', false)

  return (
    <UiKitInitializer i18n={i18n}>
      <DatePickerField isSmall={isSmall} />
      <p>
        <strong>The sample is wrapped with {UiKitInitializer.name} to handle the translation using i18next.</strong>{' '}
        i18next is not provided with this package. You have to install it and configure it yourself.
      </p>
    </UiKitInitializer>
  )
}

export const ErrorState = () => {
  return (
    <UiKitInitializer i18n={i18n}>
      <DatePickerField isRequired />
    </UiKitInitializer>
  )
}

export const BirthDateExample = () => {
  const isSmall = boolean('is small', false)

  return (
    <UiKitInitializer i18n={i18n}>
      <DatePickerField isSmall={isSmall} dateComponentSelectors={['date', 'year', 'month', 'date']} />
    </UiKitInitializer>
  )
}

export const OneDateComponentBehavior = () => {
  return (
    <UiKitInitializer i18n={i18n}>
      <pre>{"dateComponentSelectors={['date']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['date']} />
      <pre>{"dateComponentSelectors={['month']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['month']} />
      <pre>{"dateComponentSelectors={['year']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['year']} />
    </UiKitInitializer>
  )
}

export const TwoDateComponentsBehavior = () => {
  return (
    <UiKitInitializer i18n={i18n}>
      <pre>{"dateComponentSelectors={['date', 'year']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['date', 'year']} />
      <pre>{"dateComponentSelectors={['date', 'month']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['date', 'month']} />
      <pre>{"dateComponentSelectors={['month', 'year']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['month', 'year']} />
      <pre>{"dateComponentSelectors={['month', 'date']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['month', 'date']} />
      <pre>{"dateComponentSelectors={['year', 'month']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['year', 'month']} />
      <pre>{"dateComponentSelectors={['year', 'date']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['year', 'date']} />
    </UiKitInitializer>
  )
}

export const ThreeDateComponentsBehavior = () => {
  return (
    <UiKitInitializer i18n={i18n}>
      <pre>{"dateComponentSelectors={['date', 'year', 'month']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['date', 'year', 'month']} />
      <pre>{"dateComponentSelectors={['date', 'month', 'year']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['date', 'month', 'year']} />
      <pre>{"dateComponentSelectors={['month', 'year', 'date']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['month', 'year', 'date']} />
      <pre>{"dateComponentSelectors={['year', 'month', 'date']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['year', 'month', 'date']} />
      <pre>{"dateComponentSelectors={['month', 'date', 'year']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['month', 'date', 'year']} />
      <pre>{"dateComponentSelectors={['year', 'date', 'month']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['year', 'date', 'month']} />
    </UiKitInitializer>
  )
}
