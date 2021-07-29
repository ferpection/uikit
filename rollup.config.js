import typescript from '@rollup/plugin-typescript'
import svg from 'rollup-plugin-svg'
import copy from 'rollup-plugin-copy'

import pkg from './package.json'

const globalConf = {
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.devDependencies),
    '@emotion/css',
    '@emotion/react/jsx-runtime',
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
      typescript: require('typescript'),
      declarationDir: '.', // fix an issue with @rollup/plugin-typescript https://github.com/rollup/plugins/issues/934
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
