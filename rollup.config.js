import babel from 'rollup-plugin-babel'
import pkg from './package.json'

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: pkg.main,
        format: 'esm',
      },
    ],
    external: Object.keys(pkg.dependencies),
    plugins: [
      babel({
        exclude: ['node_modules/**'],
      }),
    ],
  },
  {
    input: './src/colors/index.js',
    output: [
      {
        file: 'dist/colors.js',
        format: 'esm',
      },
    ],
    external: Object.keys(pkg.dependencies),
    plugins: [
      babel({
        exclude: ['node_modules/**'],
      }),
    ],
  },
]
