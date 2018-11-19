/*chained is a higher order function for chaining together a list of unary functions. 
In other words, it should return a function that does a left fold on the given functions.
chained([a,b,c,d])(input)-->d(c(b(a(input))))
*/
function chained(functions) {
  let counter=0,result;
  let getResult=function getResult(x) {
  		if(counter==functions.length) return result;
  		if(counter==0) result=functions[counter](x);
  		else result=functions[counter](result);
  		counter=counter+1;
  		return getResult(result);
  	}
  return getResult;
}