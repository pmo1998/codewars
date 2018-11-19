/*
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.
*/

function high(x){
  let vals=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	x=x.split(' ');
	let x_scores=x.map((value)=>{return [].reduce.call(value,(acc,val)=>acc=acc+vals.indexOf(val)+1,0)});
	return x[x_scores.indexOf(Math.max(...x_scores))]
}