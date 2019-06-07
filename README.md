# Ferpection UIkit

This repo is a technical implementation of the [Ferpection Design System](https://ferpection.slab.com/topics/design-system-v48ngrzz/posts) for ReactJS.

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

For a detail of what this package provides, please see the storybook section of this README.

### Start the project (development mode)

In development mode, you may need to watch and compile the project. As we recommend using the storybook commands below, you can also have a light build using parcel.

```sh
yarn start

# or

yarn build:dev
```

### Storybook

A storybook is available to help navigate onto the list of components.

You can start the storybook:

```sh
yarn start:storybook
```

To build a static version of the storybook:

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

## License

This repository is under the MIT license. Please refer to the LICENSE file for more information.
