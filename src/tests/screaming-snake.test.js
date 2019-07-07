const screamingSnake = require('../screaming-snake')

describe('screamingSnake', () => {
	it('works as expected', () => {
		expect(screamingSnake('Lorem ipsum Dolor sit amet')).toBe(
			'LOREM_IPSUM_DOLOR_SIT_AMET',
		)
	})
})
