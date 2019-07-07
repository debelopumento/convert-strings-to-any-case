'use strict'

const { findWordsAndReplaceWith } = require('./lib')

module.exports = str => findWordsAndReplaceWith(str, '_')
