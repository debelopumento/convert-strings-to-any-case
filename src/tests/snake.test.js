const snake = require('../snake')

describe('snake', () => {
	it('works as expected', () => {
		expect(snake('Lorem ipsum Dolor sit amet')).toBe(
			'lorem_ipsum_dolor_sit_amet',
		)
	})
})
