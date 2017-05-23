import babel from 'rollup-plugin-babel';

export default {
  entry: 'src/index.jsx',
  dest: 'lib/index.js',
  sourceMap: 'inline',
  format: 'umd',
  moduleName: 'generic-component',
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  external: [
    'inferno',
  ],
  globals: {
    inferno: 'Inferno',
  },
};
