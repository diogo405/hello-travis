var Greeter = require('../app/greeter.js');

describe('Test hello', function() {
	
	it('returns hello', function() {
		var joe = new Greeter('hello');
		expect(joe.greet()).toBe('hello');
	});

	it('returns how a ya?', function() {
		var steacy = new Greeter('how a ya?');
		expect(steacy.greet()).toBe('how a ya?');
	});
});