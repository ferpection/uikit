# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html) since v1.0.0.

## [Unreleased]

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
[v0.0.7]: https://github.com/ferpection/uikit/tree/v0.0.7
[v0.0.6]: https://github.com/ferpection/uikit/tree/v0.0.6
[v0.0.5]: https://github.com/ferpection/uikit/tree/v0.0.5
[v0.0.4]: https://github.com/ferpection/uikit/tree/v0.0.4
[v0.0.3]: https://github.com/ferpection/uikit/tree/v0.0.3
[v0.0.2]: https://github.com/ferpection/uikit/tree/v0.0.2
[v0.0.1]: https://github.com/ferpection/uikit/tree/v0.0.1
