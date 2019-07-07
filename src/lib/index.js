'use strict'

const findWordsAndReplaceWith = (str, replacement) => {
	return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, word => {
		return /\s+/.test(word) ? replacement : word.toLowerCase()
	})
}
exports.findWordsAndReplaceWith = findWordsAndReplaceWith
