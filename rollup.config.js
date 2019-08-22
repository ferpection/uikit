import fs from 'fs'
import path from 'path'
import babel from 'rollup-plugin-babel'
import pkg from './package.json'

const copy = function(options) {
  return {
    generateBundle() {
      const targDir = path.dirname(options.target)
      if (!fs.existsSync(targDir)) {
        fs.mkdirSync(targDir)
      }
      fs.writeFileSync(options.target, fs.readFileSync(options.src))
    },
  }
}

const globalConf = {
  external: [
    ...Object.keys(pkg.dependencies),
    ...Object.keys(pkg.devDependencies),
    '@emotion/css',
  ],
  plugins: [
    babel({
      exclude: ['node_modules/**'],
    }),
    copy({
      src: './src/index.d.ts',
      target: './index.d.ts',
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
        file: 'colors.js',
        format: 'esm',
      },
    ],
    ...globalConf,
  },
  {
    input: './src/components/index.js',
    output: [
      {
        file: 'components.js',
        format: 'esm',
      },
    ],
    ...globalConf,
  },
]
