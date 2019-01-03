
/*
Given a string str that contains some "(" or ")".
Task is to find the longest substring in str(all brackets in the substring are closed).
The result is the length of the longest substring.

Example:
  str = "()()("
  findLongest(str) === 4
  "()()" is the longest substring
*/

function findLongest(str){
  let stack=[],max_length=0,last_closed=-1;
  [].map.call(str, (ch,index) => {
      if(ch=='(') stack.push(index);
      else {
          if(stack.length==0) last_closed=index;
          else {
              stack.pop();
              max_length= stack.length==0?Math.max(max_length,index-last_closed):
                Math.max(max_length,index-stack[stack.length-1]);
          }
      }
  });
  return max_length;
}
