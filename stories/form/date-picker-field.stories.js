import { DatePickerField } from '../../src/components/index.ts'

export default {
  title: 'Components/Forms/DatePickerField',
  component: DatePickerField,

  argTypes: {
    testLang: {
      options: ['fr', 'en', 'zh_HANS', 'ko'],
      control: {
        type: 'radio',
      },
    },
  },
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

export const NormalState = ({ testLang, ...args }) => {
  return (
    <DatePickerField
      dateLanguage={testLang}
      nextButtonLabel={labels[testLang].buttonNext}
      previousButtonLabel={labels[testLang].buttonPrevious}
      monthComponentTitle={labels[testLang].months}
      yearComponentTitle={labels[testLang].years}
      {...args}
    />
  )
}

NormalState.args = {
  testLang: 'fr',
}

export const ErrorState = ({ testLang, ...args }) => {
  return (
    <>
      <DatePickerField
        dateLanguage={testLang}
        nextButtonLabel={labels[testLang].buttonNext}
        previousButtonLabel={labels[testLang].buttonPrevious}
        monthComponentTitle={labels[testLang].months}
        yearComponentTitle={labels[testLang].years}
        {...args}
      />
      <DatePickerField
        isSmall
        dateLanguage={testLang}
        nextButtonLabel={labels[testLang].buttonNext}
        previousButtonLabel={labels[testLang].buttonPrevious}
        monthComponentTitle={labels[testLang].months}
        yearComponentTitle={labels[testLang].years}
        {...args}
      />
    </>
  )
}

ErrorState.args = {
  testLang: 'fr',
  isRequired: true,
}

export const DisabledState = ({ testLang, ...args }) => {
  return (
    <>
      <DatePickerField
        dateLanguage={testLang}
        nextButtonLabel={labels[testLang].buttonNext}
        previousButtonLabel={labels[testLang].buttonPrevious}
        monthComponentTitle={labels[testLang].months}
        yearComponentTitle={labels[testLang].years}
        {...args}
      />
      <DatePickerField
        isSmall
        dateLanguage={testLang}
        nextButtonLabel={labels[testLang].buttonNext}
        previousButtonLabel={labels[testLang].buttonPrevious}
        monthComponentTitle={labels[testLang].months}
        yearComponentTitle={labels[testLang].years}
        {...args}
      />
    </>
  )
}

DisabledState.args = {
  testLang: 'fr',
  isDisabled: true,
}

export const BirthDateExample = ({ testLang, ...args }) => {
  return (
    <DatePickerField
      dateLanguage={testLang}
      nextButtonLabel={labels[testLang].buttonNext}
      previousButtonLabel={labels[testLang].buttonPrevious}
      monthComponentTitle={labels[testLang].months}
      yearComponentTitle={labels[testLang].years}
      {...args}
    />
  )
}

BirthDateExample.args = {
  testLang: 'fr',
  dateComponentSelectors: ['date', 'year', 'year', 'month', 'date'],
}

export const OneDateComponentBehavior = ({ testLang, ...args }) => {
  return (
    <>
      <pre>{"dateComponentSelectors={['date']}"}</pre>
      <DatePickerField
        dateComponentSelectors={['date']}
        dateLanguage={testLang}
        nextButtonLabel={labels[testLang].buttonNext}
        previousButtonLabel={labels[testLang].buttonPrevious}
        monthComponentTitle={labels[testLang].months}
        yearComponentTitle={labels[testLang].years}
        {...args}
      />
      <pre>{"dateComponentSelectors={['month']}"}</pre>
      <DatePickerField
        dateComponentSelectors={['month']}
        dateLanguage={testLang}
        nextButtonLabel={labels[testLang].buttonNext}
        previousButtonLabel={labels[testLang].buttonPrevious}
        monthComponentTitle={labels[testLang].months}
        yearComponentTitle={labels[testLang].years}
        {...args}
      />
      <pre>{"dateComponentSelectors={['year']}"}</pre>
      <DatePickerField
        dateComponentSelectors={['year']}
        dateLanguage={testLang}
        nextButtonLabel={labels[testLang].buttonNext}
        previousButtonLabel={labels[testLang].buttonPrevious}
        monthComponentTitle={labels[testLang].months}
        yearComponentTitle={labels[testLang].years}
        {...args}
      />
    </>
  )
}

OneDateComponentBehavior.args = {
  testLang: 'fr',
}

export const TwoDateComponentsBehavior = ({ testLang, ...args }) => {
  return (
    <>
      <pre>{"dateComponentSelectors={['date', 'year']}"}</pre>
      <DatePickerField
        dateComponentSelectors={['date', 'year']}
        dateLanguage={testLang}
        nextButtonLabel={labels[testLang].buttonNext}
        previousButtonLabel={labels[testLang].buttonPrevious}
        monthComponentTitle={labels[testLang].months}
        yearComponentTitle={labels[testLang].years}
        {...args}
      />
      <pre>{"dateComponentSelectors={['date', 'month']}"}</pre>
      <DatePickerField
        dateComponentSelectors={['date', 'month']}
        dateLanguage={testLang}
        nextButtonLabel={labels[testLang].buttonNext}
        previousButtonLabel={labels[testLang].buttonPrevious}
        monthComponentTitle={labels[testLang].months}
        yearComponentTitle={labels[testLang].years}
        {...args}
      />
      <pre>{"dateComponentSelectors={['month', 'year']}"}</pre>
      <DatePickerField
        dateComponentSelectors={['month', 'year']}
        dateLanguage={testLang}
        nextButtonLabel={labels[testLang].buttonNext}
        previousButtonLabel={labels[testLang].buttonPrevious}
        monthComponentTitle={labels[testLang].months}
        yearComponentTitle={labels[testLang].years}
        {...args}
      />
      <pre>{"dateComponentSelectors={['month', 'date']}"}</pre>
      <DatePickerField
        dateComponentSelectors={['month', 'date']}
        dateLanguage={testLang}
        nextButtonLabel={labels[testLang].buttonNext}
        previousButtonLabel={labels[testLang].buttonPrevious}
        monthComponentTitle={labels[testLang].months}
        yearComponentTitle={labels[testLang].years}
        {...args}
      />
      <pre>{"dateComponentSelectors={['year', 'month']}"}</pre>
      <DatePickerField
        dateComponentSelectors={['year', 'month']}
        dateLanguage={testLang}
        nextButtonLabel={labels[testLang].buttonNext}
        previousButtonLabel={labels[testLang].buttonPrevious}
        monthComponentTitle={labels[testLang].months}
        yearComponentTitle={labels[testLang].years}
        {...args}
      />
      <pre>{"dateComponentSelectors={['year', 'date']}"}</pre>
      <DatePickerField
        dateComponentSelectors={['year', 'date']}
        dateLanguage={testLang}
        nextButtonLabel={labels[testLang].buttonNext}
        previousButtonLabel={labels[testLang].buttonPrevious}
        monthComponentTitle={labels[testLang].months}
        yearComponentTitle={labels[testLang].years}
        {...args}
      />
    </>
  )
}

TwoDateComponentsBehavior.args = {
  testLang: 'fr',
}

export const ThreeDateComponentsBehavior = ({ testLang, ...args }) => {
  return (
    <>
      <pre>{"dateComponentSelectors={['date', 'year', 'month']}"}</pre>
      <DatePickerField
        dateComponentSelectors={['date', 'year', 'month']}
        dateLanguage={testLang}
        nextButtonLabel={labels[testLang].buttonNext}
        previousButtonLabel={labels[testLang].buttonPrevious}
        monthComponentTitle={labels[testLang].months}
        yearComponentTitle={labels[testLang].years}
        {...args}
      />
      <pre>{"dateComponentSelectors={['date', 'month', 'year']}"}</pre>
      <DatePickerField
        dateComponentSelectors={['date', 'month', 'year']}
        dateLanguage={testLang}
        nextButtonLabel={labels[testLang].buttonNext}
        previousButtonLabel={labels[testLang].buttonPrevious}
        monthComponentTitle={labels[testLang].months}
        yearComponentTitle={labels[testLang].years}
        {...args}
      />
      <pre>{"dateComponentSelectors={['month', 'year', 'date']}"}</pre>
      <DatePickerField
        dateComponentSelectors={['month', 'year', 'date']}
        dateLanguage={testLang}
        nextButtonLabel={labels[testLang].buttonNext}
        previousButtonLabel={labels[testLang].buttonPrevious}
        monthComponentTitle={labels[testLang].months}
        yearComponentTitle={labels[testLang].years}
        {...args}
      />
      <pre>{"dateComponentSelectors={['year', 'month', 'date']}"}</pre>
      <DatePickerField
        dateComponentSelectors={['year', 'month', 'date']}
        dateLanguage={testLang}
        nextButtonLabel={labels[testLang].buttonNext}
        previousButtonLabel={labels[testLang].buttonPrevious}
        monthComponentTitle={labels[testLang].months}
        yearComponentTitle={labels[testLang].years}
        {...args}
      />
      <pre>{"dateComponentSelectors={['month', 'date', 'year']}"}</pre>
      <DatePickerField
        dateComponentSelectors={['month', 'date', 'year']}
        dateLanguage={testLang}
        nextButtonLabel={labels[testLang].buttonNext}
        previousButtonLabel={labels[testLang].buttonPrevious}
        monthComponentTitle={labels[testLang].months}
        yearComponentTitle={labels[testLang].years}
        {...args}
      />
      <pre>{"dateComponentSelectors={['year', 'date', 'month']}"}</pre>
      <DatePickerField
        dateComponentSelectors={['year', 'date', 'month']}
        dateLanguage={testLang}
        nextButtonLabel={labels[testLang].buttonNext}
        previousButtonLabel={labels[testLang].buttonPrevious}
        monthComponentTitle={labels[testLang].months}
        yearComponentTitle={labels[testLang].years}
        {...args}
      />
    </>
  )
}

ThreeDateComponentsBehavior.args = {
  testLang: 'fr',
}
