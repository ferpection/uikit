import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'

import { DatePickerField } from '../../src/components/index.ts'

export default {
  title: 'Components/Forms/DatePickerField',
  component: DatePickerField,
  decorators: [withA11y, withKnobs],
}

const labels = {
  en: {
    buttonNext: 'Next',
    buttonPrevious: 'Previous',
    years: 'Years',
    months: 'Months',
  },
  fr: {
    buttonNext: 'Suivant',
    buttonPrevious: 'Précédent',
    years: 'Années',
    months: 'Mois',
  },
  zh_HANS: {
    buttonNext: '下一个',
    buttonPrevious: '上一个',
    years: '年',
    months: '月',
  },
  ko: {
    buttonNext: '다음',
    buttonPrevious: '이전',
    years: '연령',
    months: '개월',
    datePlaceholder: 'dd/mm/yyyy',
    invalidDate: '유효한 날짜를 입력하십시오 (dd/mm/yyyy)',
  },
}

export const NormalState = () => {
  const isSmall = boolean('is small', false)
  const lang = select('language', ['fr', 'en', 'zh_HANS', 'ko'], 'fr')

  return (
    <DatePickerField
      isSmall={isSmall}
      dateLanguage={lang}
      nextButtonLabel={labels[lang].buttonNext}
      previousButtonLabel={labels[lang].buttonPrevious}
      monthComponentTitle={labels[lang].months}
      yearComponentTitle={labels[lang].years}
    />
  )
}

export const ErrorState = () => {
  const lang = select('language', ['fr', 'en', 'zh_HANS', 'ko'], 'fr')

  return (
    <>
      <DatePickerField
        isRequired
        dateLanguage={lang}
        nextButtonLabel={labels[lang].buttonNext}
        previousButtonLabel={labels[lang].buttonPrevious}
        monthComponentTitle={labels[lang].months}
        yearComponentTitle={labels[lang].years}
      />
      <DatePickerField
        isRequired
        isSmall
        dateLanguage={lang}
        nextButtonLabel={labels[lang].buttonNext}
        previousButtonLabel={labels[lang].buttonPrevious}
        monthComponentTitle={labels[lang].months}
        yearComponentTitle={labels[lang].years}
      />
    </>
  )
}

export const DisabledState = () => {
  const lang = select('language', ['fr', 'en', 'zh_HANS', 'ko'], 'fr')

  return (
    <>
      <DatePickerField
        isDisabled
        dateLanguage={lang}
        nextButtonLabel={labels[lang].buttonNext}
        previousButtonLabel={labels[lang].buttonPrevious}
        monthComponentTitle={labels[lang].months}
        yearComponentTitle={labels[lang].years}
      />
      <DatePickerField
        isSmall
        isDisabled
        dateLanguage={lang}
        nextButtonLabel={labels[lang].buttonNext}
        previousButtonLabel={labels[lang].buttonPrevious}
        monthComponentTitle={labels[lang].months}
        yearComponentTitle={labels[lang].years}
      />
    </>
  )
}

export const BirthDateExample = () => {
  const isSmall = boolean('is small', false)
  const lang = select('language', ['fr', 'en', 'zh_HANS', 'ko'], 'fr')

  return (
    <DatePickerField
      isSmall={isSmall}
      dateComponentSelectors={['date', 'year', 'year', 'month', 'date']}
      dateLanguage={lang}
      nextButtonLabel={labels[lang].buttonNext}
      previousButtonLabel={labels[lang].buttonPrevious}
      monthComponentTitle={labels[lang].months}
      yearComponentTitle={labels[lang].years}
    />
  )
}

export const OneDateComponentBehavior = () => {
  const lang = select('language', ['fr', 'en', 'zh_HANS', 'ko'], 'fr')

  return (
    <>
      <pre>{"dateComponentSelectors={['date']}"}</pre>
      <DatePickerField
        isSmall={boolean('is small', false)}
        dateComponentSelectors={['date']}
        dateLanguage={lang}
        nextButtonLabel={labels[lang].buttonNext}
        previousButtonLabel={labels[lang].buttonPrevious}
        monthComponentTitle={labels[lang].months}
        yearComponentTitle={labels[lang].years}
      />
      <pre>{"dateComponentSelectors={['month']}"}</pre>
      <DatePickerField
        isSmall={boolean('is small', false)}
        dateComponentSelectors={['month']}
        dateLanguage={lang}
        nextButtonLabel={labels[lang].buttonNext}
        previousButtonLabel={labels[lang].buttonPrevious}
        monthComponentTitle={labels[lang].months}
        yearComponentTitle={labels[lang].years}
      />
      <pre>{"dateComponentSelectors={['year']}"}</pre>
      <DatePickerField
        isSmall={boolean('is small', false)}
        dateComponentSelectors={['year']}
        dateLanguage={lang}
        nextButtonLabel={labels[lang].buttonNext}
        previousButtonLabel={labels[lang].buttonPrevious}
        monthComponentTitle={labels[lang].months}
        yearComponentTitle={labels[lang].years}
      />
    </>
  )
}

export const TwoDateComponentsBehavior = () => {
  const lang = select('language', ['fr', 'en', 'zh_HANS', 'ko'], 'fr')

  return (
    <>
      <pre>{"dateComponentSelectors={['date', 'year']}"}</pre>
      <DatePickerField
        isSmall={boolean('is small', false)}
        dateComponentSelectors={['date', 'year']}
        dateLanguage={lang}
        nextButtonLabel={labels[lang].buttonNext}
        previousButtonLabel={labels[lang].buttonPrevious}
        monthComponentTitle={labels[lang].months}
        yearComponentTitle={labels[lang].years}
      />
      <pre>{"dateComponentSelectors={['date', 'month']}"}</pre>
      <DatePickerField
        isSmall={boolean('is small', false)}
        dateComponentSelectors={['date', 'month']}
        dateLanguage={lang}
        nextButtonLabel={labels[lang].buttonNext}
        previousButtonLabel={labels[lang].buttonPrevious}
        monthComponentTitle={labels[lang].months}
        yearComponentTitle={labels[lang].years}
      />
      <pre>{"dateComponentSelectors={['month', 'year']}"}</pre>
      <DatePickerField
        isSmall={boolean('is small', false)}
        dateComponentSelectors={['month', 'year']}
        dateLanguage={lang}
        nextButtonLabel={labels[lang].buttonNext}
        previousButtonLabel={labels[lang].buttonPrevious}
        monthComponentTitle={labels[lang].months}
        yearComponentTitle={labels[lang].years}
      />
      <pre>{"dateComponentSelectors={['month', 'date']}"}</pre>
      <DatePickerField
        isSmall={boolean('is small', false)}
        dateComponentSelectors={['month', 'date']}
        dateLanguage={lang}
        nextButtonLabel={labels[lang].buttonNext}
        previousButtonLabel={labels[lang].buttonPrevious}
        monthComponentTitle={labels[lang].months}
        yearComponentTitle={labels[lang].years}
      />
      <pre>{"dateComponentSelectors={['year', 'month']}"}</pre>
      <DatePickerField
        isSmall={boolean('is small', false)}
        dateComponentSelectors={['year', 'month']}
        dateLanguage={lang}
        nextButtonLabel={labels[lang].buttonNext}
        previousButtonLabel={labels[lang].buttonPrevious}
        monthComponentTitle={labels[lang].months}
        yearComponentTitle={labels[lang].years}
      />
      <pre>{"dateComponentSelectors={['year', 'date']}"}</pre>
      <DatePickerField
        isSmall={boolean('is small', false)}
        dateComponentSelectors={['year', 'date']}
        dateLanguage={lang}
        nextButtonLabel={labels[lang].buttonNext}
        previousButtonLabel={labels[lang].buttonPrevious}
        monthComponentTitle={labels[lang].months}
        yearComponentTitle={labels[lang].years}
      />
    </>
  )
}

export const ThreeDateComponentsBehavior = () => {
  const lang = select('language', ['fr', 'en', 'zh_HANS', 'ko'], 'fr')

  return (
    <>
      <pre>{"dateComponentSelectors={['date', 'year', 'month']}"}</pre>
      <DatePickerField
        isSmall={boolean('is small', false)}
        dateComponentSelectors={['date', 'year', 'month']}
        dateLanguage={lang}
        nextButtonLabel={labels[lang].buttonNext}
        previousButtonLabel={labels[lang].buttonPrevious}
        monthComponentTitle={labels[lang].months}
        yearComponentTitle={labels[lang].years}
      />
      <pre>{"dateComponentSelectors={['date', 'month', 'year']}"}</pre>
      <DatePickerField
        isSmall={boolean('is small', false)}
        dateComponentSelectors={['date', 'month', 'year']}
        dateLanguage={lang}
        nextButtonLabel={labels[lang].buttonNext}
        previousButtonLabel={labels[lang].buttonPrevious}
        monthComponentTitle={labels[lang].months}
        yearComponentTitle={labels[lang].years}
      />
      <pre>{"dateComponentSelectors={['month', 'year', 'date']}"}</pre>
      <DatePickerField
        isSmall={boolean('is small', false)}
        dateComponentSelectors={['month', 'year', 'date']}
        dateLanguage={lang}
        nextButtonLabel={labels[lang].buttonNext}
        previousButtonLabel={labels[lang].buttonPrevious}
        monthComponentTitle={labels[lang].months}
        yearComponentTitle={labels[lang].years}
      />
      <pre>{"dateComponentSelectors={['year', 'month', 'date']}"}</pre>
      <DatePickerField
        isSmall={boolean('is small', false)}
        dateComponentSelectors={['year', 'month', 'date']}
        dateLanguage={lang}
        nextButtonLabel={labels[lang].buttonNext}
        previousButtonLabel={labels[lang].buttonPrevious}
        monthComponentTitle={labels[lang].months}
        yearComponentTitle={labels[lang].years}
      />
      <pre>{"dateComponentSelectors={['month', 'date', 'year']}"}</pre>
      <DatePickerField
        isSmall={boolean('is small', false)}
        dateComponentSelectors={['month', 'date', 'year']}
        dateLanguage={lang}
        nextButtonLabel={labels[lang].buttonNext}
        previousButtonLabel={labels[lang].buttonPrevious}
        monthComponentTitle={labels[lang].months}
        yearComponentTitle={labels[lang].years}
      />
      <pre>{"dateComponentSelectors={['year', 'date', 'month']}"}</pre>
      <DatePickerField
        isSmall={boolean('is small', false)}
        dateComponentSelectors={['year', 'date', 'month']}
        dateLanguage={lang}
        nextButtonLabel={labels[lang].buttonNext}
        previousButtonLabel={labels[lang].buttonPrevious}
        monthComponentTitle={labels[lang].months}
        yearComponentTitle={labels[lang].years}
      />
    </>
  )
}
