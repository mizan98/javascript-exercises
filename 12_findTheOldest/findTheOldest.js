const findTheOldest = function(array) {
	debugger
	// let age = array.map(age => age.yearOfDeath - age.yearOfBirth)
	// console.log(age)

	// console.log(Math.max(...age)

	const oldestPerson = array.sort(function(a,b) {
	const lastPerson = a.yearOfDeath - a.yearOfBirth;
  const nextPerson = b.yearOfDeath - b.yearOfBirth;
	return nextPerson - lastPerson
	});

	return oldestPerson[0]
};

// Do not edit below this line
module.exports = findTheOldest;
