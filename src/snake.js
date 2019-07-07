'use strict'

module.exports = str => {
	return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, word => {
		return /\s+/.test(word) ? '_' : word.toLowerCase()
	})
}
