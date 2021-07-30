import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { action } from '@storybook/addon-actions'
import { withA11y } from '@storybook/addon-a11y'

import { N75_COLOR, FULL_COLORSET } from '../../src/colors/index.ts'
import {
  Button,
  ThemeProvider,
  TextFieldList,
  TextField,
  CheckboxGroup,
  CheckboxButton,
  SelectField,
  RadioGroup,
  RadioButton,
  MarkdownField,
  DatePickerField,
  FileField,
  Tabs,
  TabLink,
} from '../../src/components/index.ts'

const Preview = props => (
  <pre
    css={{
      backgroundColor: N75_COLOR.toString(),
      padding: 40,
      marginTop: 40,
    }}
  >
    {props.children}
  </pre>
)

export default {
  title: 'Contexts/ThemeProvider',
  component: ThemeProvider,
  decorators: [withA11y],
}

export const Colors = args => {
  return (
    <ThemeProvider {...args}>
      <pre>Button w/ action color:</pre>
      <Button icon="search" onClick={action('[action] clicked')} isFilled>
        Review study
      </Button>
      <pre>Button w/ positive color:</pre>
      <Button icon="rocket" actionType="positive" onClick={action('[positive] clicked')} isFilled>
        Launch study
      </Button>
      <pre>Button w/ negative color:</pre>
      <Button icon="trash" actionType="negative" onClick={action('[negative] clicked')} isFilled>
        Delete study
      </Button>
      <pre>TextField:</pre>
      <TextField isRequired />
      <pre>TextFieldList:</pre>
      <TextFieldList isRequired isEditable />
      <pre>FileField:</pre>
      <FileField isMultiple />
      <pre>CheckboxGroup & CheckboxButton:</pre>
      <CheckboxGroup value={['']}>
        <CheckboxButton value="one">Choice One</CheckboxButton>
        <CheckboxButton value="two">Choice Two</CheckboxButton>
        <CheckboxButton value="three">Choice Three</CheckboxButton>
      </CheckboxGroup>
      <pre>SelectField:</pre>
      <SelectField placeholder="This is a highlighted select" isHighlighted />
      <pre>Tabs:</pre>
      <BrowserRouter>
        <Tabs>
          <TabLink to="/" exactMatch>
            Home
          </TabLink>
          <TabLink to="/about">About</TabLink>
        </Tabs>
        <Switch>
          <Route exact path="/">
            <Preview>Home page loaded</Preview>
          </Route>
          <Route path="/about">
            <Preview>About page loaded</Preview>
          </Route>
        </Switch>
      </BrowserRouter>
      <pre>MarkdownField:</pre>
      <MarkdownField isHighlighted />
      <pre>DatePickerField:</pre>
      <DatePickerField dateComponentSelectors={['date', 'year', 'year', 'month', 'date']} />
      <pre>RadioGroup & RadioButton:</pre>
      <RadioGroup value="">
        <RadioButton value="one">Unique choice</RadioButton>
      </RadioGroup>
    </ThemeProvider>
  )
}

Colors.args = {
  theme: {
    colors: {
      action: FULL_COLORSET.ROBINS_EGG_BLUE,
      actionLight: FULL_COLORSET.BLACK_SQUEEZE,
      positive: FULL_COLORSET.SHAMROCK,
      positiveLight: FULL_COLORSET.WHITE_ICE,
      negative: FULL_COLORSET.SUNGLOW,
      negativeLight: FULL_COLORSET.FLORAL_WHITE,
    },
  },
}
