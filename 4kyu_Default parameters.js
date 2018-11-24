function getParameters(func) {
	let str_function=func.toString();
	let reg=/function\s.*?\(([^)]*)\)/;
	if(str_function.match(reg)) return  str_function.match(reg)[1].replace(/[/].*$/mg,'').replace(/\s/g,'').split(',');
	else return null;
}


function sortParametersInProperOrder(func_parameters,params) {
	let new_params={};
	for(let i=0;i<func_parameters.length;i++) {
		if(params.hasOwnProperty(func_parameters[i])) new_params[func_parameters[i]]=params[func_parameters[i]];
	}
	return new_params;
}

/* defaultArguments takes a function as an argument, along with an object containing default values for that function's arguments, and returns another function which defaults to the right values.
The function's arguments have any particular names.

function add(a,b) { return a+b;};

var add_ = defaultArguments(add,{b:9});
add_(10); // returns 19
add_(10,7); // returns 17
add_(); // returns NaN

add_ = defaultArguments(add_,{b:3, a:2});
add_(10); // returns 13 now
add_(); // returns 5

add_ = defaultArguments(add_,{c:3}); // doesn't do anything, since c isn't an argument
add_(10); // returns NaN
add_(10,10); // returns 20
*/

function defaultArguments(func,params) {
	let func_parameters=getParameters(func);
	if(func_parameters&&func_parameters[0]!='') this.parameters=func_parameters; 
	return function () {
		params=sortParametersInProperOrder(this.parameters,params);
		let def_args={};
		for(let i=0;i<this.parameters.length;i++) def_args[this.parameters[i]]=params[this.parameters[i]];
		def_args=Object.values(def_args);
		let args=[];
		args.push(...arguments);
		for(let i=0;i<args.length;i++) def_args[i]=args[i];
		return func(...def_args);
	}
}
