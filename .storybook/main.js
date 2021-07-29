module.exports = {
  stories: ['../**/*.stories.@(js|tsx|mdx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
  ],
  babel: async options => ({
    ...options,
    presets: [
      ...options.presets.filter(preset => !preset[0].includes('@babel/preset-react')),
      ['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }],
    ],
    // any extra options you want to set
  }),
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: prop => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },
}
