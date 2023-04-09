// @ts-ignore
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
// @ts-ignore
import sourceMaps from 'rollup-plugin-sourcemaps';
// @ts-ignore
import camelCase from 'lodash.camelcase';
import typescript from 'rollup-plugin-typescript2';
// @ts-ignore
import json from 'rollup-plugin-json';

const pkg = require('./package.json');

const libraryName = 'unofficial-vk-play-live-api';

const globals = {
  axios: 'axios',
  '@reactivex/rxjs': '@reactivex/rxjs',
  '@reactivex/rxjs/dist/typings': '@reactivex/rxjs/dist/typings'
};

export default {
  input: `src/${libraryName}.ts`,
  output: [
    {
      file: pkg.main,
      name: camelCase(libraryName),
      format: 'umd',
      sourcemap: true,
      globals
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      globals
    }
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  external: [],
  watch: {
    include: 'src/**'
  },
  plugins: [
    // Allow json resolution
    json(),

    // Compile TypeScript files
    typescript({ useTsconfigDeclarationDir: true }),

    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs({
      include: 'node_modules/**' // ['node_modules/axios/**', 'node_modules/lodash/**', 'node_modules/@reactivex/**']
    }),

    // Allow node_modules resolution, so you can use 'external' to control
    // which external modules to include in the bundle
    resolve({
      jsnext: true,
      preferBuiltins: true,
      browser: true
    }),

    // Resolve source maps to the original source
    sourceMaps()
  ]
};
