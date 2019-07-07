const dash = require('../dash')

describe('dash', () => {
	it('works as expected', () => {
		expect(dash('Lorem ipsum Dolor sit amet')).toBe(
			'lorem-ipsum-dolor-sit-amet',
		)
	})
})
