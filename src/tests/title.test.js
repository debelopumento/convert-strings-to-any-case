const title = require('../title')

describe('title', () => {
	it('works as expected', () => {
		expect(title('Lorem ipsum Dolor sit amet')).toBe(
			'Lorem Ipsum Dolor Sit Amet',
		)
	})
})
