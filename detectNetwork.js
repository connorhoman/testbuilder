// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
	var length = cardNumber.length;
	

	if (length === 14 && (cardNumber.indexOf('38') === 0 || cardNumber.indexOf('39') === 0)) {
		return "Diner's Club";
	}

	if (length === 15 && (cardNumber.indexOf('34') === 0 || cardNumber.indexOf('37') === 0)) {
		return 'American Express';
	}

	if (length === 16 && (cardNumber.indexOf('51') === 0 || cardNumber.indexOf('52') === 0 || cardNumber.indexOf('53') === 0 || cardNumber.indexOf('54') === 0 || cardNumber.indexOf('55') === 0)) {
		return 'MasterCard';
	}

	if (cardNumber.indexOf('5018') === 0 || cardNumber.indexOf('5020') === 0 || cardNumber.indexOf('5038') === 0 || cardNumber.indexOf('6304') === 0) {
		return 'Maestro';
	}
	if ((length === 16 || length === 19) && (cardNumber.indexOf('6011') === 0 || cardNumber.indexOf('65') === 0 || cardNumber.indexOf('644') === 0 || cardNumber.indexOf('645') === 0 || cardNumber.indexOf('646') === 0 || cardNumber.indexOf('647') === 0 || cardNumber.indexOf('648') === 0 || cardNumber.indexOf('649') === 0)) {
		return 'Discover';
	}


	if ((length === 16 || length === 18 || length === 19) && (cardNumber.indexOf('4903') === 0 || cardNumber.indexOf('4905') === 0 || cardNumber.indexOf('4911') === 0 || cardNumber.indexOf('4936') === 0 || cardNumber.indexOf('564182') === 0 || cardNumber.indexOf('633110') === 0 || cardNumber.indexOf('6333') === 0 || cardNumber.indexOf('6759') === 0)) {
		return 'Switch';
	}
	

	if ((length === 13 || length === 16 || length === 19) && (cardNumber.indexOf('4') === 0)) {
		return 'Visa';
	}
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};

