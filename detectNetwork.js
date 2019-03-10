// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
	var length = cardNumber.length;
	var first = cardNumber.split('')[0];
	var second = cardNumber.split('')[1];

	if (length === 14 && first === '3') {
		return "Diner's Club";
	}

	if (length === 15 && first === '3') {
		return 'American Express';
	}

	if (first === '4') {
		return 'Visa';
	}

	if (first === '5' && second !== '0') {
		return 'MasterCard';
	}

	
	if ((first === '6' && second === '3') || (first === '5' && second === '0')) {
		return 'Maestro';
	}
	if (first === '6' && (length === 16 || length === 19)) {
		return 'Discover';
	}
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


