# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project **don't** adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html) for now.

## [Unreleased]

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
- **BREACKING CHANGES**. The project now use pnpmjs instead of yarn as main package manager.
  - The NPM package still can be installed using npm or yarn.
  - The other scripts (build, publish, start, etc) need pnpm.
    *If you have troubles running the `build` command after installing package using yarn or pnpm*
    *try to remove and install them again using `pnpm install --shamefully-hoist`.*

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
- **BREACKING CHANGES**. Existing alternative package endpoints are removed for now.
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
- **BREAKING CHANGES**. New package endpoints.
    - `@ferpection/uikit/colors` replaces `@ferpection/uikit/dist/colors`
    - `@ferpection/uikit/components` replaces `@ferpection/uikit/dist/components`
- Smaller `@ferpection/uikit` package size: better dependency management
- **BREAKING CHANGES**. Colors are not strings anymore but instance of `Color` type.
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

[Unreleased]: https://github.com/ferpection/uikit/tree/master
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
