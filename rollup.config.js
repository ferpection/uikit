import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'

const globalConf = {
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.devDependencies),
    '@emotion/css',
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
  ],
}

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: pkg.module,
        format: 'esm',
      },
      {
        file: pkg.main,
        format: 'cjs',
      },
    ],
    ...globalConf,
  },
]
