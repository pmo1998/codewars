
/*
The task is to find one missing and one duplicate number
Example:
solution([2,4,1,6,3,4]) should return [5,4] because 5 is missing and 4 appears twice.
*/

function solution(array) {
  var missing = 0, duplicate = 0,elements_sum=0,total_sum=0;
  let seen=new Set();
  for(let i=0;i<array.length;i++) {
		if(seen.has(array[i])) duplicate=array[i];
		else {
			seen.add(array[i]);
			elements_sum+=array[i];
		}  	
  }
  for(let i=1;i<=seen.size+1;i++) {
  		total_sum+=i;
  }
  missing=total_sum-elements_sum;
  return [missing,duplicate];
}
