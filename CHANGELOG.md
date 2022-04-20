# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html) since [v0.1.0].

## [Unreleased]

### Changed

- **[BREAKING]** React v18. The major upgrade to React v18 might make UiKit incompatible with projects using lower version of react.

### Fixed

- Fix buttons positioning in other components (DatePickerField, MarkdownField)
- Fix buttons's code semantic. Improve rendering and browser support

## [v2.0.2] - 2022-01-21

### Fixed

- Chrome weird behavior fixed: Make the Button inline using `inline-flex` intead of `inline flex`.

## [v2.0.1] - 2022-01-21

### Fixed

- Move text in the add button of the `TextFieldList` to the left
- Make `TabLink` able to handle active page

## [v2.0.0] - 2021-11-09

### Changed

- Dependencies has been upgraded.
- **[BREAKING]** React Router v6: Due to API changes, React Router's version lower than 6 isn't supported anymore.
- **[BREAKING]** ESLint v8: ESLint only supports version of NodeJS upper than v16.

## [v1.8.1] - 2021-10-14

### Fixed

- Buttons acted like block components. They are inline again.

## [v1.8.0] - 2021-09-28

### Added

- New `ScoreField` which given a range let the user select an amount of stars.

## [v1.7.0] - 2021-09-23

### Added

- New `iconPosition` attribute to allow icon position customisation on `Button`.
- New `textPosition` attribute to allow text position customisation on `Button`.
- New `ScaleField` which given a range let the user select a value in a scale.

## [v1.6.0] - 2021-08-06

### Addded

- New `placeholderPattern` on `TextFieldList`. Works like the `markerPattern` and let you choose placeholder
  for each sub-`TextField` in the list.

### Changed

- **Deprecating `placeholder` in favor of `placeholderPattern` in `TextFieldList`**. `placeholder` still work for
  now but will be removed in the next major release.

## [v1.5.0] - 2021-07-30

### Changed

- Technical update (deprecations, dependencies, etc)

## [v1.4.0] - 2021-07-16

### Added

- **Expose IDs from `TextFieldList`.** New `onFlatValueChange` attribute to get the legacy flat value

### Changed

- **Expose IDs from `TextFieldList`.** `onValueChange` now return the full verison of value containing IDs and texts.

### Fixed

- Default markers for `TextFieldList` starts at 1 not 0

## [v1.3.0] - 2021-06-23

### Added

- In `TextFieldList`, user can now specify custom pattern as list markers using an array of string.
- New switch component called `SwitchButton`. It works like the `CheckboxButton` component with the ability to change icon like the `Button` component.

### Fixed

- Fix a bug in `ReorderabledList` that might sometimes make the ordering being wrong.
  The item order was sometime unexpectedly in "read-only" mode.

## [v1.2.0] - 2021-06-10

### Added

- Allow `ReoderableList`'s children to know when the drag has started.

### Changed

- `DatePickerField` is less prone to trigger the `onChangeValue` event if not needed
- New border style for `ReorderableList`'s dropzone

## [v1.1.0] - 2021-05-24

### Added

- Bring theming support to all components.
- Expose the internal `useTheme` hook to allow developers to use Uikit theme in their components.
- A new `useThemeMutation` hook allow the mutation of the Uikit theme in a child component.

### Fixed

- Make the `value` attribute of `CheckboxGroup` optional again

## [v1.0.3] - 2021-05-18

### Fix

- Fix a weird behavior introduced in the previous version where `TextFieldList` never trigger the `onValueChange`
  except when adding a new value to the list.

## [v1.0.2] - 2021-05-11 [YANKED]

### Fixed

- Avoid useless call to `onValueChange` of `CheckboxGroup`. This might have caused React to re-render
  in an infinite loop in some usecases.
- Avoid useless call to `onValueChange` of `TextFieldList`. This might have caused React to re-render
  in an infinite loop in some usecases.

## [v1.0.1] - 2021-03-11

### Fixed

- Fix a misconfiguration that prevented TS Lib helpers to be used at runtime

## [v1.0.0] - 2021-03-10

### Added

- UiKit components provide new attributes to let developes override their strings.
  It can be used to customize the components or to translate it.
  For examples, look at the [`DatePickerField` documentation page](https://ferpection.github.io/uikit/?path=/docs/components-forms-datepickerfield--normal-state).

### Changed

- [BREACKING] UiKit now uses React v17
- [BREACKING] UiKit now uses EmotionJS v11
- [BREACKING] UiKit now uses Typescript v4.2

### Removed

- [BREACKING] **No more translation in UiKit sourcecode.** All the strings will be
  render as English. `UiKitInitializer` doesn't accept your i18n library intance anymore.
  We added new way of handling translation, see the **Added** section.

## [v0.12.1] - 2021-02-02

### Fixed

- Fixed a typo in `RadioButton`'s styles. Actually, used the right level of index for `RadioButton`'s child element.
- Fixed a rendering bug with emotionjs styled component used as child of `OneBlockStack`

## [v0.12.0] - 2021-02-02

### Added

- New icon for FerpectionBadgeIcon

### Fixed

- Used the right level of index for `RadioButton`'s child element
- Make the `OneBlockStack` component support other styles from child div tags.

## [v0.11.1] - 2021-01-08

### Fixed

- Fix CD for GitHub release
- Apply linting rules

## [v0.11.0] - 2021-01-08

### Added

- Add validation for the date format in `DatePickerField`

### Changed

- Hypens and points in date aren't supported anymore

### Fixed

- `RadioButton` and `CheckboxButton` doesn't require `actionType` anymore.
- Display the `DatePickerField`'s placeholder in the correct locale.

## [v0.10.0] - 2020-12-16

### Added

- It is possible to customize how the `CheckboxButton` and the `RadioButton` looks using a
  new `actionType` attribute. Works like the same attribute on `Button` component w/ three
  states: "action", "positive" and "negative".
- New `OneBlockStack` component to group UiKit's form fields as one big component.
- UiKit package stores common sass files. Endpoint to access them is `@ferpection/uikit/sass/[...].scss`.

### Fixed

- Resolve an issue that hide the hover effect of the `CheckboxButton` and
  the `RadioButton` in some cases
- Make the calendar popin appear on top of other UI elements.

## [v0.9.0] - 2020-11-03

### Added

- A hook called `useSamenessNumberState` allows to a "`string` state" contain only
  a number. This is usefull for some `input` tags which `value` is only a `string` but
  should represent a number (e.g. a price, a quantity).
- It is possible to modify the styles of almost every components using emotionjs.
- `TextField` and `MarkdownField` components emit `onSelect` event to allow work on text selection.
- A new button on `MarkdownField`'s panel will show an help about markdown syntax to users.

### Changed

- Use numbers for short version of the days' names in chinese.
- Enforce numbers as value for `TextField` when `dataType` is equal to `number`.
  `value` attribute still is a `string`.

### Removed

- `TextField` doesn't test if `value` is a `number` when `dataType` is equal to `number`.
  This is due to `useSamenessNumberState` which ensure that the value contains a `number`.

### Fixed

- Make the calendar icon/button appear on top of the `DatePickerField`'s input even when the error
  message is longer than the field.
- Fix a typo on the previous button of the `DatePickerField` in chinese version.
- Disable `MarkdownField`'s button when there are no text selected.

## [v0.8.0] - 2020-10-29

### Added

- UiKit supports `zh_HANS` locale.

## [v0.7.2] - 2020-10-27

### Fixed

- Force box-sizing on `DatePickerField` to avoid being broken on other projects.

## [v0.7.1] - 2020-10-20

### Fixed

- The calendar button of `DatePickerField` is also disabled when the field is.

## [v0.7.0] - 2020-10-20

### Added

- `RadioGroup` now supports errors & validation:
  A `RadioGroup` have an visual error state and can be marked as required.
  It is also possible to add custom validators to influence how the component
  triggers the error state.
- `CheckboxGroup` now supports errors & validation:
  A `CheckboxGroup` have an visual error state and can be marked as required.
  It is also possible to add custom validators to influence how the component triggers
  the error state.

### Changed

- Improve typing experience in the `DatePickerField` component. Users can show and hide
  the calendar using a button at the right. Users can type a text, when it becomes a
  valid date it is used in the calendar.

### Fixed

- Remove an internal error displayed in the console when a `Button` was used directly in
  the `Header` component.
- For `RadioGroup` and `CheckboxGroup` with only one option, add rounded corner at every corner.
- Make the `SelectField` look like the `TextField` in the "small state": less margin and a bit taller.

## [v0.6.0] - 2020-10-16

### Added

- New `validators` attribute for all the form components to display custom errors.
- The `DatePicker` component allows for direct month and year selection.
  The developer can choose what are the date components directly selectable using
  the new `dateComponentSelectors` attribute.
- The order of the date components in the `dateComponentSelectors` attribute of `DatePickerField`
  changes the behavior of the selection modal. Date component selectors are shown in the same
  order as the order of `dateComponentSelectors`.

### Fixed

- Remove a React error that apears in the console when the `value` attibute
  of the `TextFieldList` take a bigger set of strings.
- Remove a bug a bug that prevent the changes in the `value` attribute of the `TextFieldList`
  to be applied into the component.
- Removea bug on `TextFieldList` that display an error messages related to
  a value that doesn't exist anymore.
- `isHighlighted` attribute isn't require anymore on `SelectField` component.
- When the value changes in `DatePicker`'s `value` attribute, the field is reset
  with the new value.

## [v0.5.0] - 2020-09-15

### Added

- `FileField`'s `value` attribute is now ignored if it's not an array of `File`.

### Changed

- When the value changes in `FileField`'s `value` attribute, the field is reset
  with the new value.

### Fixed

- `FileField` support fileName containing both "\" and "/".
- Large file name won't break the `FileField` component anymore.

## [v0.4.3] - 2020-09-14

### Fixed

- **[INTERNAL]** Changes in CI/CD worflows.
- Fix the CHANGELOG.md sections (typos, etc).

## [v0.4.2] - 2020-09-14

### Fixed

- `MarkdownField` display the initial `value`.
- CD workflow now works on master only. Solve GitHub Action issue about git HEAD ref.

## [v0.4.1] - 2020-09-14

### Fixed

- Allow `MarkdownField` to emit value change event (`onValueChange` component's attribute).
- `FileField` shows the files given as value. The `value` attribute was ignored before.
- `FileField` is correctly translated. Resolve a bug that only displays translation key.
- Error messages from UiKit are now correctly translated.

## [v0.4.0] - 2020-09-10

### Added

- New `FileField` to upload files in a form.
- New simple `MarkdownField` to help user put text in bold or italic.

## [v0.3.2] - 2020-04-08

### Fixed

- Avoid breaking client's design with useless margins in `ReorderableList`.

## [v0.3.1] - 2020-04-08

### Fixed

- Fix a weird behavior where the list items would disappear during drag if the item list was firstly initiated as an empty array.

## [v0.3.0] - 2020-04-08

### Added

- New `DraggableItem` and `Dropzone` component to easily implement drag and drop without `ReorderableList`.
- `TextField` supports `number` as data type. An error is displayed when the value is not a valid number.

### Changed

- `ReorderableList` do NOT show distinct dropzone in the list anymore. Each element become a dropzone.
  The new behavior allows us to solve an edge cases described in the "Fixed" section below.

### Fixed

- Minimize the change of position when the user starts to drag an element of `ReorderableList`
  which could prevent the drag and drop to work correctly in the Chrome browser.

## [v0.2.0] - 2020-04-02

### Added

- New `DragHandle` component to be used with the `ReorderableList`.
  The goals is to delegate to the user the choice of what can trigger the dragn'drop behavior.
- Using a new `useExternalDragHandle` attribute on a `ReorderableList` component,
  the user can enable the `DragHandle` capabilities.
- User can display a smaller version of `SelectField`.
- `SelectField` support the `className` attribute.
- `SelectField` support the `hideErrors` attribute. When used no error message is displayed
  but the field still shows the error state.

### Changed

- The "add button"'s icon of the `TextFieldList` is now hidden when navigating using the keyboard
  to avoid having twice the same button (addition).
- `onFocus` and `onBlur` is triggered in a more logical way.
  - `TextFieldList` doesn't trigger twice the `onFocus` event when the user click on the delete button
    after updating the input value. It is the same "`onFocus` session".
  - When the user click only on the deletion or addition button the `onFocus` and `onBlur` are triggered once each.
  - Keyboard navigation use now the same behavior.

### Fixed

- `TextFieldList` can used again without value attribute.
- The "delete button" of `TextFieldList` is displayed during keyboard navigation.
- Add an option to test the small version of `TextField` in storybook.

## [v0.1.1] - 2020-02-14

### Fixed

- `TextFieldList` do not loose focus when the user is writing something.

## [v0.1.0] - 2020-02-13

### Added

- New "device" option for `FerpectionBadgeIcon` used in `ThematicSection`.
- Expose the `FontAwesomeIcon` from the font awesome react package.

### Changed

- We wrapp the `DatePickerField` with `UiKitInitializer` only on its storybook to display
  the documentation with translation support.
- The `RadioButton` can be disabled even on a non-disabled `RadioGroup`.
- The `CheckboxButton` can be disabled even on a non-disabled `CheckboxGroup`.

### Fixed

- Correct translated strings are display by `DatePickerField`
- Change how `UiKitInitializer` manage to use the i18n delegate (`this` problem, null pointer exception problem)

## [v0.0.27] - 2020-02-11

### Added

- New component `ReoderableList` to make list of components reorderable using drag and drop.
- New attribute `radioPosition` on `RadioButton` and `checkboxPosition` on `CheckboxButton`.
  Allow to stick the radio circle and check box to the top or the bottom. Defaults to center.
  _The new attributes aren't available when used inside of a `CheckboxGroup` or a `RadioGroup`. Forced to center._

### Changed

- `CheckboxGroup` and `RadioGroup` don't sticky the button on Y axis anymore but on the center position.

### Fixed

- `DatePickerField` modal has now a `z-index` of 1 to be upper than regular fields.
- `CheckboxGroup` and `RadioGroup` don't affect children's `div` anymore.

## [v0.0.26] - 2020-02-10

### Added

- New attribute `isOrdered` on `TextFieldList`. Basicaly, `<ol>` becomes `<ul>` when not ordered.
- It is possible to change the row count of the `TextField` in `TextFieldList`.
- New attribute `maxFieldCount` on `TextFieldList`. It hides the add button when the value of `maxFieldCount` is reached.
- New `DatePickerField` component to display a date input.
- New attribute `isSmall` on `TextField` to display a smaller version of he `TextField`.

### Changed

- All form components can be updated using the `value` attribute.
- **[BREAKING CHANGES]** The default behavior of `TextFieldList` is to be "not ordered".
  You'll have to add the new `isOrdered` attribute on your existing components.
- `FormErrors` become `FormErrorMessages`.
- `FormErrorMessages` try to translate the error key automatically.
- `ThemeProvider` doesn't loads the font anymore. We created a more generic component (`UIKitInitializer`) that'll do it.
- `FormErrorMessages` filter error that are equal to `false`
- If an error is equal to en object instead of `true`, the object is passed to the translator as variables by `FormErrorMessages`.
- `RadioButton` and `CheckboxButton` support other type than string for their `children` attribute.

### Fixed

- Update types to allow no theme data into `ThemeProvider`.

### Security

- The list components don't use the `nth-child` CSS attributes in favor of `nth-of-type`.

## [v0.0.25] - 2020-01-15

### Added

- New `FontsLoader`. An easy way to load fonts asynchronously.

### Changed

- `ThematiqueSection`'s title adjustement (styles)
- `ThemeProvider` become a wrapper of the `ThemeContext.Provider`.
  It provides a new way to set theme's value (the `theme` attribute).
  User doesn't need to explicitly mention every theme options.
- `ThemeProvider` automatically loads the font on the whole page.

### Fixed

- `Button` is displayed using the OpenSans font as default.

## [v0.0.24] - 2019-12-31

### Fixed

- Decrease the margins on `RadioGroup`.

## [v0.0.23] - 2019-12-31

### Fixed

- Decrease the margins on `CheckboxGroup`.

## [v0.0.22] - 2019-12-31

### Added

- New `Tabs` and `TabLink` components. Works with active state.

### Changed

- `RadioButton` and `CheckboxButton` take up less space in height.
- Add default margin again on the `TextField` component.

### Fixed

- Change the way option buttons are display in the `TextFieldList` component.

## [v0.0.21] - 2019-11-06

### Fixed

- SVG icon not built properly

## [v0.0.20] - 2019-11-04

### Fixed

- Display a v-check on `CheckboxButton`
- `TextFieldList` is now the rendered the same on Firefox as other browsers

## [v0.0.19] - 2019-10-28

### Added

- New `RadioButton` component to handle `input[type="radio"]` as single instance
- New `CheckboxButton` component to handle `input[type="checkbox"]` as a single instance
- New `RadioGroup` component to use several `RadioButton` together
- New `CheckboxGroup` component to use several `CheckboxButton` together

## [v0.0.18] - 2019-10-18

### Added

- Expose a new `useMergedFocusHandlers` hook

## [v0.0.17] - 2019-10-18

### Fixed

- Update the `files` key in package.json to let pnpm correctly upload the package

## [v0.0.16] - 2019-10-18

### Added

- Support of `onMouseUp`, `onFocus`, `onBlur` and `onMouseDown` on `Button`s
- Support of `onFocus` and `onBlur` on `TextField`, `SelectField` and `TextFieldList`

### Changed

- No outline on `Button`s, even on focus state
- **[BREAKING CHANGES]** The project now use pnpmjs instead of yarn as main package manager.
  - The NPM package still can be installed using npm or yarn.
  - The other scripts (build, publish, start, etc) need pnpm.
    _If you have troubles running the `build` command after installing package using yarn or pnpm_
    _try to remove and install them again using `pnpm install --shamefully-hoist`._

### Fixed

- Form fields no longer have a "union type" as type
  - `TextFieldList`'s `value` attribute has a new type which is `string[]`!
  - `TextField`'s `value` attribute has a new type which is `string`!
  - `SelectField`'s `value` attribute has a new type which is `string`!

## [v0.0.15] - 2019-10-11

### Added

- `TextFieldList` uses its `value` attribute as expected (to set the values)

### Fixed

- `TextFieldList`'s `value` attribute has a new type which is `string[]`!

## [v0.0.14] - 2019-10-09

### Fixed

- `value` is now optional on all form components
- `headerLightVersion` is now optional on HeaderLink
- `onValueChange` is now optional on `TextFieldList` (already option on other form components)

## [v0.0.13] - 2019-10-09

### Added

- `className`support for `TextField`
- `onBlur`support for `TextField`
- Font constants are exposed

### Changed

- Using TypeScript as main language

### Removed

- **[BREAKING CHANGES]** Existing alternative package endpoints are removed for now.
  `@ferpection/uikit` works. `@ferpection/uikit/colors` or `@ferpection/uikit/components` won't work anymore.

### Fixed

- Link in `HelpBlock`s' body are gray

## [v0.0.12] - 2019-08-30

### Added

- New layout component called `ThematicSection`. It adds a header (icon, title, actions) to each section
- New `FerpectionBadgeIcon` component that can display all the ferpection badge icons in a custom badge border color

### Fixed

- Fix types for `TextFieldList`

## [v0.0.11] - 2019-08-29

### Fixed

- Import Link directly from `react-router-dom`.
  Dependent project must have `react-router-dom` installed to be able to use the `Button` components.

## [v0.0.10] - 2019-08-28

### Fixed

- On click on the plus icon, a new field is added on the `TextFieldList` component
- Add `TextField`, `FormErrors`, `SelectField`, `TextFieldList` in TypeScript declaration file

## [v0.0.9] - 2019-08-28

### Added

- Expose a declaration file to simplify the use w/ TypeScript
- New `TextField` component to display textarea and inputs
- New `FormErrors` component to give a default way of displaying errors
- New `SelectField` component to display select box
- New `TextFieldList` component to display a mutable list of `TextField`

### Changed

- **[BREAKING CHANGES]**. New package endpoints.
  - `@ferpection/uikit/colors` replaces `@ferpection/uikit/dist/colors`
  - `@ferpection/uikit/components` replaces `@ferpection/uikit/dist/components`
- Smaller `@ferpection/uikit` package size: better dependency management
- **[BREAKING CHANGES]**. Colors are not strings anymore but instance of `Color` type.
  This change gives developers the ability to work with different formats and make possible operating on colors
  (like applying alpha components and retrieve a shape from a given color). For more information,
  please read the `Color` class reference.

## [v0.0.8] - 2019-08-21

### Changed

- All dependencies have been updated at their latest versions
- `react`, `react-dom`, `react-router-dom` and `@emotion/core` aren't automatically installed w/ `@ferpection/uikit` right now.

## [v0.0.7] - 2019-08-21

### Fixed

- `Button`s loads `sm` FontAwesome icon
- Fix aria attributes for `Button`s
- Fix Typos in CSS attributes
- `HeaderLink` better share data w/ other components.

## [v0.0.6] - 2019-08-21

### Added

- New `HeaderLink` component to be use as light header links.
- New `Header` component to centralise common header style. It's customizable using the `Button` and `HeaderLink` components
- Expose a customizable ferpection's logo via `FerpectionLogo` component.

### Changed

- Button have a `to` attribute where the target can be specified. Depending on the type of target Button will
  be rendered as an `a`, a `button` or a `Link` from `react-router-dom`

## [v0.0.5] - 2019-07-12

### Added

- Button have a `actionType` attribute to express if the action is "positive", "negative" or normal ("default")
- New `ThemeProvider` component. It is a context provider for theming data. Used by the UIkit components

### Changed

- Automatically set `aria-label` field for text button
- Removing `NegativeButton` and `PositiveButton`. DX was not cool w/ these two.

## [v0.0.4] - 2019-07-09

### Added

- There is now neutral colors exposed (`N75` to `N500`).
- New entrypoints to optimize bunles size (tree shaking):
  - `@ferpection/uikit/colors` to load only colors
  - `@ferpection/uikit/components` to load only components
- Creation of a CHANGELOG file to easily store change logs before tagging.
- It is possible to change `Button`s color using the `color` attribute.
- New `PositiveButton` and `NegativeButton` to express sentiment about actions.
- `Button`s automatically calculates hover color based on main color.

### Changed

- Colors' names has been updated.
- Basic default button's [color is `C200`](https://ferpection.slab.com/posts/colors-175fg3yl#cyans).
- `IconButton` is removed in favor of `Button`

### Fixed

- **Internal**: JSX is also formated using prettier.
- `Button`s now follow Ferpection's website design rules (borders, font, animations, etc).

## [v0.0.3] - 2019-06-12

### Added

- `Button`s can be disabled
- `Button`s can be filled with their main color
- Color list of the current design system is implemented in the package

### Changed

- It is possible to change the values used by the components in the storybook
- The storybook tests accessibility issues
- `Button`s have PropTypes

## [v0.0.2] - 2019-06-05

### Changed

- We use rollup instead of parcel to better optimize the library build
- No `index.js` anymore as latest versions of Node don't have file extension resolution enabled by default

### Fixed

- The style works from the external package. (They worked into the storybook but not on Codesandbox using `@ferpection/uikit`)

## [v0.0.1] - 2019-06-05

### Added

- Install common dependencies
- Create two components: Button and IconButton
- Setup storybook as documentation

[unreleased]: https://github.com/ferpection/uikit/tree/master
[v2.0.2]: https://github.com/ferpection/uikit/tree/v2.0.2
[v2.0.1]: https://github.com/ferpection/uikit/tree/v2.0.1
[v2.0.0]: https://github.com/ferpection/uikit/tree/v2.0.0
[v1.8.1]: https://github.com/ferpection/uikit/tree/v1.8.1
[v1.8.0]: https://github.com/ferpection/uikit/tree/v1.8.0
[v1.7.0]: https://github.com/ferpection/uikit/tree/v1.7.0
[v1.6.0]: https://github.com/ferpection/uikit/tree/v1.6.0
[v1.5.0]: https://github.com/ferpection/uikit/tree/v1.5.0
[v1.4.0]: https://github.com/ferpection/uikit/tree/v1.4.0
[v1.3.0]: https://github.com/ferpection/uikit/tree/v1.3.0
[v1.2.0]: https://github.com/ferpection/uikit/tree/v1.2.0
[v1.1.0]: https://github.com/ferpection/uikit/tree/v1.1.0
[v1.0.3]: https://github.com/ferpection/uikit/tree/v1.0.3
[v1.0.2]: https://github.com/ferpection/uikit/tree/v1.0.2
[v1.0.1]: https://github.com/ferpection/uikit/tree/v1.0.1
[v1.0.0]: https://github.com/ferpection/uikit/tree/v1.0.0
[v0.12.1]: https://github.com/ferpection/uikit/tree/v0.12.1
[v0.12.0]: https://github.com/ferpection/uikit/tree/v0.12.0
[v0.11.1]: https://github.com/ferpection/uikit/tree/v0.11.1
[v0.11.0]: https://github.com/ferpection/uikit/tree/v0.11.0
[v0.10.0]: https://github.com/ferpection/uikit/tree/v0.10.0
[v0.9.0]: https://github.com/ferpection/uikit/tree/v0.9.0
[v0.8.0]: https://github.com/ferpection/uikit/tree/v0.8.0
[v0.7.2]: https://github.com/ferpection/uikit/tree/v0.7.2
[v0.7.1]: https://github.com/ferpection/uikit/tree/v0.7.1
[v0.7.0]: https://github.com/ferpection/uikit/tree/v0.7.0
[v0.6.0]: https://github.com/ferpection/uikit/tree/v0.6.0
[v0.5.0]: https://github.com/ferpection/uikit/tree/v0.5.0
[v0.4.3]: https://github.com/ferpection/uikit/tree/v0.4.3
[v0.4.2]: https://github.com/ferpection/uikit/tree/v0.4.2
[v0.4.1]: https://github.com/ferpection/uikit/tree/v0.4.1
[v0.4.0]: https://github.com/ferpection/uikit/tree/v0.4.0
[v0.3.2]: https://github.com/ferpection/uikit/tree/v0.3.2
[v0.3.1]: https://github.com/ferpection/uikit/tree/v0.3.1
[v0.3.0]: https://github.com/ferpection/uikit/tree/v0.3.0
[v0.2.0]: https://github.com/ferpection/uikit/tree/v0.2.0
[v0.1.1]: https://github.com/ferpection/uikit/tree/v0.1.1
[v0.1.0]: https://github.com/ferpection/uikit/tree/v0.1.0
[v0.0.27]: https://github.com/ferpection/uikit/tree/v0.0.27
[v0.0.26]: https://github.com/ferpection/uikit/tree/v0.0.26
[v0.0.25]: https://github.com/ferpection/uikit/tree/v0.0.25
[v0.0.24]: https://github.com/ferpection/uikit/tree/v0.0.24
[v0.0.23]: https://github.com/ferpection/uikit/tree/v0.0.23
[v0.0.22]: https://github.com/ferpection/uikit/tree/v0.0.22
[v0.0.21]: https://github.com/ferpection/uikit/tree/v0.0.21
[v0.0.20]: https://github.com/ferpection/uikit/tree/v0.0.20
[v0.0.19]: https://github.com/ferpection/uikit/tree/v0.0.19
[v0.0.18]: https://github.com/ferpection/uikit/tree/v0.0.18
[v0.0.17]: https://github.com/ferpection/uikit/tree/v0.0.17
[v0.0.16]: https://github.com/ferpection/uikit/tree/v0.0.16
[v0.0.15]: https://github.com/ferpection/uikit/tree/v0.0.15
[v0.0.14]: https://github.com/ferpection/uikit/tree/v0.0.14
[v0.0.13]: https://github.com/ferpection/uikit/tree/v0.0.13
[v0.0.12]: https://github.com/ferpection/uikit/tree/v0.0.12
[v0.0.11]: https://github.com/ferpection/uikit/tree/v0.0.11
[v0.0.10]: https://github.com/ferpection/uikit/tree/v0.0.10
[v0.0.9]: https://github.com/ferpection/uikit/tree/v0.0.9
[v0.0.8]: https://github.com/ferpection/uikit/tree/v0.0.8
[v0.0.7]: https://github.com/ferpection/uikit/tree/v0.0.7
[v0.0.6]: https://github.com/ferpection/uikit/tree/v0.0.6
[v0.0.5]: https://github.com/ferpection/uikit/tree/v0.0.5
[v0.0.4]: https://github.com/ferpection/uikit/tree/v0.0.4
[v0.0.3]: https://github.com/ferpection/uikit/tree/v0.0.3
[v0.0.2]: https://github.com/ferpection/uikit/tree/v0.0.2
[v0.0.1]: https://github.com/ferpection/uikit/tree/v0.0.1
