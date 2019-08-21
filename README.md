# Ferpection UIkit

This repo is a technical implementation of the [Ferpection Design System](https://ferpection.slab.com/topics/design-system-v48ngrzz/posts) for ReactJS.

## Prerequisites

This package use [React](https://reactjs.org), [React Router](https://reacttraining.com/react-router/web/) and [EmotionJS](https://emotion.sh/).
To avoid conflicts, those packages aren't automatically installed and doesn't come with this package.

You must have those packages installed in your project in order to use `@ferpection/uikit`.

```sh
yarn add react react-dom react-router-dom @emotion/core
```

or

```sh
npm install react react-dom react-router-dom @emotion/core --save
```

## Install

Use npm or yarn to install the UI kit.

```sh
yarn add @ferpection/uikit
```

or

```sh
npm install @ferpection/uikit --save
```

## Usage

The package expose some UI component you can use in your own project using a classic `import` statement.

```js
import { Button } from '@ferpection/uikit'
```

For a detail of what this package provides and what is the usage of a specific component, please see the storybook section of this README.

### Start the project (development mode)

In development mode, you may need to watch and compile the project. As we recommend using the storybook commands below, you can also have a light build using rollupjs.

```sh
yarn start

# or

yarn build:dev
```

### Storybook

A storybook is available to help navigate onto the list of components. You can access to [the last generated storybook](https://ferpection.github.io/uikit/) on GitHub Pages to see the last published version of `@ferpection/uikit`.

You can also start the storybook locally for development purpose:

```sh
yarn start:storybook
```

Or build a static version (HTML/CSS/JS) of the storybook:

```sh
yarn build:storybook
```

### Build the project (production mode)

To build the project, a build command exist. This will build the project in production mode in the `dist` folder.

There is no watch mode on this command.

```sh
yarn build
```

### Run static code analysis

This project use eslint to check formatting rules and ensure code quality.

To run the analysis on your locale version:

```sh
yarn test:lint
```

### Formatting tools

We use prettier to automatically format the code following the same rules of the linter.

**Please be sure to run prettier before pushing code.**
Use can use an editor plugin to format regularly and automate the process (on save for example).

```sh
yarn format
```

Prettier only format the code. It doesn't (can't) rewrite the code to pass code-quality rules checks.
You still need to run the linter sometimes to be able to refactor before asking for a review.

## Changelog

Changes are logged into a CHANGELOG.md file and reported to the release panel of the repository when a new built package is published on NPM servers.

So, to see released version changelogs, go to [the release panel](https://github.com/ferpection/uikit/releases) of the repository. To see unreleased changelog, go to [the CHANGELOG.md](https://github.com/ferpection/uikit/blob/master/CHANGELOG.md) file.

## License

This repository is under the MIT license. Please refer to the LICENSE file for more information.

_Copyright (c) 2019 Ferpection_
