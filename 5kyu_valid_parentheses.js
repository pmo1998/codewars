/*
validParentheses is a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
The function should return true if the string is valid, and false if it's invalid.
Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
*/

function validParentheses(parens){
  let counter=0;
  for(let i=0;i<parens.length;i++) {
    if(counter==0&&parens[i]==')') return false;
    if(parens[i]=='(') counter++;
    if(parens[i]==')') counter--;
  }
  if(counter==0) return true; 
  else return false;
}