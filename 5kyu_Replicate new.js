//nouveau function  replicates all the behavior of the new operator

function nouveau (Constructor_,...values) {
	let instance={}, bound=Constructor_.bind(instance);
	if(bound() && typeof bound()==="object" || typeof bound()==="function") return bound();
	else if(instance && typeof instance==="object" || typeof instance==="function") {
		bound(...values);
		Object.setPrototypeOf(instance, Constructor_.prototype);
		return instance;
	}
	else return bound();
}

/*
function Person (name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.introduce = function(){
  return 'My name is ' + this.name + ' and I am ' + this.age;
};
var john = nouveau(Person, 'John', 30); 
console.log( john.introduce() ); // My name is John and I am 30
console.log( jack.introduce() ); // My name is Jack and I am 40
*/