import typescript from 'rollup-plugin-typescript'
import pkg from './package.json'

const globalConf = {
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.devDependencies),
    '@emotion/css',
  ],
  plugins: [
    typescript({
      exclude: ['node_modules/**'],
    }),
  ],
}

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'esm',
      },
    ],
    ...globalConf,
  },
  {
    input: './src/colors/index.ts',
    output: [
      {
        file: 'colors.js',
        format: 'esm',
      },
    ],
    ...globalConf,
  },
  {
    input: './src/components/index.ts',
    output: [
      {
        file: 'components.js',
        format: 'esm',
      },
    ],
    ...globalConf,
  },
]
