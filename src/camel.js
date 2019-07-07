'use strict'

module.exports = str => {
	return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (word, index) => {
		if (/\s+/.test(word)) {
			return ''
		}
		return index ? word.toUpperCase() : word.toLowerCase()
	})
}
