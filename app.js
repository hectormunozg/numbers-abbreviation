// variables
var customSelector 	 = "dataconvert";
var kFactor 		 = "K";
var mFactor 		 = "M";
var decNumK 		 = 2;
var decNumM 		 = 2;
var separator 		 = '.';
var realNumbers 	 = [];
var convertedNumbers = [];

// convert number to abbreviate mode
var convertNumber = function(number) {
	// apply the correct / factor
	if (number >= 1000000) {
		// math round
		number = (number / 1000000);
		// adding decimal positions
		number = number.toFixed(decNumM);
		// adding suffix
		number = number + mFactor;
		// optional replace separator
		number = replaceSeparator(number);
		return number;
		console.log(number);

	} else if (number >= 1000) {
		number = (number / 1000);
		number = number.toFixed(decNumK);
		number = number + kFactor;
		number = replaceSeparator(number);
		return number;
		console.log(number);
	}	
};

var replaceSeparator = function(number) {
	return number.replace('.', separator);
};

// target elements to convert
$('[' + customSelector + ']').each(function() { 
	// store them into numbers array
	realNumbers.push($(this).text()); 
});

// loop to convert every number on the page 
for (var i = 0; i < realNumbers.length; i++) {
	// add value of the number in new array
	convertedNumbers.push(convertNumber(realNumbers[i]));
};

// replace every data loop
for (var i = 0; i < realNumbers.length; i++)  {
	$('[' + customSelector  + ']'+ ':eq(' + i + ')').text(convertedNumbers[i]);
}