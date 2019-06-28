# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]


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
[v0.0.3]: https://github.com/ferpection/uikit/tree/v2.0.1
[v0.0.2]: https://github.com/ferpection/uikit/tree/v2.0.0
[v0.0.1]: https://github.com/ferpection/uikit/tree/v1.0.0
