/*
Calculations using functions and get the results.
Examples:
	seven(times(five())); // must return 35
	four(plus(nine())); // must return 13
	eight(minus(three())); // must return 5
	six(dividedBy(two())); // must return 3
*/

const template = (n,args) => args.length ? Math.floor(eval(n+args[0])) :n;

const zero = (...args) => template(0,args);
const one = (...args)=> template(1,args);
const two = (...args) => template(2,args);
const three = (...args) => template(3,args);
const four = (...args)=> template(4,args);
const five = (...args) => template(5,args);
const six = (...args) => template(6,args);
const seven = (...args)=> template(7,args);
const eight = (...args) => template(8,args);
const nine = (...args) => template(9,args);

const plus= (...args) => '+'+args[0];
const minus= (...args) => '-'+args[0];
const times= (...args) => '*'+args[0];
const dividedBy= (...args) => '/'+args[0];
