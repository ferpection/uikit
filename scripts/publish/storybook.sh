#!/bin/sh

yarn build:storybook && gh-pages -d storybook-static
