import babel from 'rollup-plugin-babel'
import pkg from './package.json'

const globalConf = {
  external: Object.keys(pkg.dependencies),
  plugins: [
    babel({
      exclude: ['node_modules/**'],
    }),
  ],
}

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'esm',
      },
    ],
    ...globalConf,
  },
  {
    input: './src/colors/index.js',
    output: [
      {
        file: 'dist/colors.js',
        format: 'esm',
      },
    ],
    ...globalConf,
  },
  {
    input: './src/components/index.js',
    output: [
      {
        file: 'dist/components.js',
        format: 'esm',
      },
    ],
    ...globalConf,
  },
]
