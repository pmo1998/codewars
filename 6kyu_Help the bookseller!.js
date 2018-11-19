/*
A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. 
Each book has a code c of 3, 4, 5 or more capitals letters. 
The 1st letter of a code is the capital letter of the book category. 
In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}
M = {"A", "B", "C", "W"}
--->  (A : 20) - (B : 114) - (C : 50) - (W : 0)

*/

var getResult=function(arr) {
  arr=Object.entries(arr);
  if(arr.every((value)=> value[1]==0)) return "";
	let result="";
	for(let i=0;i<arr.length;i++) {
		result+="("+arr[i][0]+" : "+arr[i][1]+")";
		if(i<arr.length-1) result+=" - "
	}
	return result;
}
var stockList=function(b, c) {
	let arr={};
	for(let i=0;i<c.length;i++) arr[c[i]]=0;
	for(let i=0;i<b.length;i++) {
		let sum=0,first_letter=b[i].charAt(0);
		if(c.includes(first_letter)) {
				arr[first_letter]+=Number.parseInt(b[i].split(' ')[1]);
			}
		}
	return getResult(arr);
}