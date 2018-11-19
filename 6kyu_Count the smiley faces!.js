/*
Valid smiley face examples:
:) :D ;-D :~)
Invalid smiley faces:
;( :> :} :]
countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
*/

function countSmileys(arr) {
  return arr.reduce(function(acc, currentValue) { 
		return acc + /^[:|;][-|~]?[)|D]$/.test(currentValue);
	}, 0); 
}