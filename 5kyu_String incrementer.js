/*
	If the string already ends with a number, the number should be incremented by 1.
	If the string does not end with a number the number 1 should be appended to the new string.
	Examples:
		foo -> foo1
		foobar23 -> foobar24
		foo0042 -> foo0043
		foo9 -> foo10
		foo099 -> foo100
*/

function incrementString (str) {
	let index=str.search(/\d+$/);
	if(index==(-1)) return str+="1";
	let numStr=str.substring(index),numInt=parseInt(numStr)+1;
    //numStr is a part with numbers like "0099"; numInt is incremented numStr and it's an integer
	str=str.substring(0,index);//str is a part without numbers
	if(numStr.length<numInt.toString().length) 	str+=numInt.toString();
	else {
	  	let intLength=numInt.toString().length;
	  	numStr=numStr.slice(0,-intLength)+numInt.toString();
	  	str+=numStr;
	}
	return str;
}