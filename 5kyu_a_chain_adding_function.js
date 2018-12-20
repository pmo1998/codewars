/*
Examples:
	add(1)(2)(3); // 6
	add(1)(2)(3)(4); // 10
	add(1)(2)(3)(4)(5); // 15
*/

function add(n){
  let addTwo = b => add(n+b);
  addTwo.valueOf= () => n;
  return addTwo;
}

