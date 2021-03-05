import typescript from 'rollup-plugin-typescript2'
import svg from 'rollup-plugin-svg'
import copy from 'rollup-plugin-copy'

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
    svg({ base64: true }),
    copy({
      targets: [{ src: 'src/sass/**/*', dest: 'dist/sass' }],
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
