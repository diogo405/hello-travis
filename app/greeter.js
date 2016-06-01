function Greeter(greeting) {
	this.greeting = greeting;
}

Greeter.prototype.greet = function() {
	return this.greeting;
};

module.exports = Greeter;