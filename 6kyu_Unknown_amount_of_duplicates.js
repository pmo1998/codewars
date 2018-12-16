/*
The tast is to find the missing number with the duplicate numbers (duplicates should be output in a sorted array).
Example:
	array = [10,9,8,9,6,1,2,4,3,2,5,5,3]
	find_dups_miss([10,9,8,9,6,1,2,4,3,2,5,5,3]) == [7,[2,3,5,9]]
*/

function findDupsMiss(array) {
    var missing = 0, duplicates = [],elements_sum=0,total_sum=0,a=b=array[0];
	  let seen=new Set();
	  for(let i=0;i<array.length;i++) {
			if(seen.has(array[i])) 	duplicates.push(array[i]);
			else {
				seen.add(array[i]);
				elements_sum+=array[i];
				if(array[i]<a) a=array[i];
				if(array[i]>b) b=array[i];
			}  	
	  }
	  for(let i=a;i<=b;i++) {
	  		total_sum+=i;
	  }
	 missing=total_sum-elements_sum;
    return [missing,duplicates.sort(function(a,b){return a-b;})];