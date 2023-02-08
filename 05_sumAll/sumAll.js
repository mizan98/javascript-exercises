const sumAll = function(value1, value2) {
	
	// const initialValue = 0;
	// const newSum = sum.reduce((accumulator, currentValue) => accumulator + currentValue,
  // initialValue)
	let sum = 0;

	for(i=value1; i<value2+1; i++) (
		sum += i
	)
	
	// console.log(numbers)
	// numbers.forEach((number) => { sum = sum + number })

	return sum;

};

sumAll(1,4)

// Do not edit below this line
module.exports = sumAll;
