const fibonacci = function(count) {

	let a = 0;
  let b = 1;
  for (let i = 1; i < count; i++) {
    const num = b;
    b = a + b;
    a = num;
  }
  return b;

};

// Do not edit below this line
module.exports = fibonacci;
