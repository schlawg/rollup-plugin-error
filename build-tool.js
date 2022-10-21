import * as rup from 'rollup'
import typescript from 'rollup-plugin-typescript2'

rup.watch({
  input: 'src/index.ts',
  plugins: [typescript()],
  output: {
    file: 'dist/index.js',
    format: 'iife'
  }
}).on('event', e => {
  if (e.code == 'ERROR')
    console.log(e);
})