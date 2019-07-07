const camel = require('../camel')

describe('camel', () => {
	it('works as expected', () => {
		expect(camel('Lorem ipsum Dolor sit amet')).toBe(
			'loremIpsumDolorSitAmet',
		)
	})
})
