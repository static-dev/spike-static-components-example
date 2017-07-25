const htmlStandards = require('reshape-standard')
const cssStandards = require('spike-css-standards')
const _jsStandards = require('spike-js-standards')
const preactBabel = require('babel-preset-preact')
const renderComponents = require('reshape-preact-components')

// we need the preact babel plugin to process jsx
// and we need babel-register to require these files and have their jsx
// processed correctly. if you don't use jsx, none of this is needed
const jsStandards = _jsStandards({ appendPresets: [preactBabel] })
require('babel-register')(jsStandards)
const staticOnly = require('./assets/js/components/static-only')
const staticAndClient = require('./assets/js/components/static-and-client')

module.exports = {
  matchers: { html: '*(**/)*.sgr', css: '*(**/)*.sss' },
  ignore: ['**/layout.sgr', '**/_*', '**/.*', 'readme.md', 'yarn.lock'],
  reshape: htmlStandards({
    // here we pair a custom element name to a preact component
    appendPlugins: [renderComponents({
      'static-only': staticOnly,
      'static-and-client': staticAndClient
    })]
  }),
  postcss: cssStandards(),
  babel: jsStandards
}
