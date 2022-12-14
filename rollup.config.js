import typescript from 'rollup-plugin-typescript2'

export default {
  input: 'src/index.ts',
  plugins: [typescript()],
  output: {
    file: 'dist/index.js',
    format: 'iife'
  }
}