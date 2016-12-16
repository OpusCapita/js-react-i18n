// set node evn
process.env.NODE_ENV = 'test';

// register babel presets
require('babel-register')({
  presets: ['es2015', 'stage-0', 'react'],
  plugins: ['istanbul', 'transform-decorators-legacy']
});
