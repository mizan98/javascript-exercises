const removeFromArray = function(...args) {
	let array = args[0]
	return array.filter(val => !args.includes(val))
};
removeFromArray([1,2,3,4], [3, 2])

// Do not edit below this line
module.exports = removeFromArray;
