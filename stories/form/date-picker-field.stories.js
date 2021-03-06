import React from 'react'

import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'

import { DatePickerField } from '../../src/components/index.ts'

export default {
  title: 'Components/Forms/DatePickerField',
  component: DatePickerField,
  decorators: [withA11y, withKnobs],
}

export const NormalState = () => {
  const isSmall = boolean('is small', false)
  const lang = select('language', ['fr', 'en', 'zh_HANS', 'fr', 'ko'])

  return (
    <DatePickerField isSmall={isSmall} dateLanguage={lang} />
  )
}

export const ErrorState = () => {
  const lang = select('language', ['fr', 'en', 'zh_HANS', 'fr'])

  return (
    <>
      <DatePickerField isRequired dateLanguage={lang} />
      <DatePickerField isRequired isSmall dateLanguage={lang} />
    </>
  )
}

export const DisabledState = () => {
  const lang = select('language', ['fr', 'en', 'zh_HANS', 'fr'])

  return (
    <>
      <DatePickerField isDisabled dateLanguage={lang} />
      <DatePickerField isSmall isDisabled dateLanguage={lang} />
    </>
  )
}

export const BirthDateExample = () => {
  const isSmall = boolean('is small', false)
  const lang = select('language', ['fr', 'en', 'zh_HANS', 'fr'])

  return (
    <DatePickerField isSmall={isSmall} dateComponentSelectors={['date', 'year', 'year', 'month', 'date']} dateLanguage={lang} />
  )
}

export const OneDateComponentBehavior = () => {
  const lang = select('language', ['fr', 'en', 'zh_HANS', 'fr'])

  return (
    <>
      <pre>{"dateComponentSelectors={['date']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['date']} dateLanguage={lang} />
      <pre>{"dateComponentSelectors={['month']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['month']} dateLanguage={lang} />
      <pre>{"dateComponentSelectors={['year']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['year']} dateLanguage={lang} />
    </>
  )
}

export const TwoDateComponentsBehavior = () => {
  const lang = select('language', ['fr', 'en', 'zh_HANS', 'fr'])

  return (
    <>
      <pre>{"dateComponentSelectors={['date', 'year']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['date', 'year']} dateLanguage={lang} />
      <pre>{"dateComponentSelectors={['date', 'month']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['date', 'month']} dateLanguage={lang} />
      <pre>{"dateComponentSelectors={['month', 'year']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['month', 'year']} dateLanguage={lang} />
      <pre>{"dateComponentSelectors={['month', 'date']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['month', 'date']} dateLanguage={lang} />
      <pre>{"dateComponentSelectors={['year', 'month']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['year', 'month']} dateLanguage={lang} />
      <pre>{"dateComponentSelectors={['year', 'date']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['year', 'date']} dateLanguage={lang} />
    </>
  )
}

export const ThreeDateComponentsBehavior = () => {
  const lang = select('language', ['fr', 'en', 'zh_HANS', 'fr'])

  return (
    <>
      <pre>{"dateComponentSelectors={['date', 'year', 'month']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['date', 'year', 'month']} dateLanguage={lang} />
      <pre>{"dateComponentSelectors={['date', 'month', 'year']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['date', 'month', 'year']} dateLanguage={lang} />
      <pre>{"dateComponentSelectors={['month', 'year', 'date']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['month', 'year', 'date']} dateLanguage={lang} />
      <pre>{"dateComponentSelectors={['year', 'month', 'date']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['year', 'month', 'date']} dateLanguage={lang} />
      <pre>{"dateComponentSelectors={['month', 'date', 'year']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['month', 'date', 'year']} dateLanguage={lang} />
      <pre>{"dateComponentSelectors={['year', 'date', 'month']}"}</pre>
      <DatePickerField isSmall={boolean('is small', false)} dateComponentSelectors={['year', 'date', 'month']} dateLanguage={lang} />
    </>
  )
}
