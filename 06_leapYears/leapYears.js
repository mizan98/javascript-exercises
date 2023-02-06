const leapYears = function(year) {
	const leap = new Date(year, 1, 29).getDate() === 29;
	const isLeapYear = true
	if (leap) {
			return isLeapYear;
	} else {
			return !isLeapYear;
	}
};

// Do not edit below this line
module.exports = leapYears;
