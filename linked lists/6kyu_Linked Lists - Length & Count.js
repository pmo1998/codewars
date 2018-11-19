function Node(data=null,next=null) {
	this.data=data;
	this.next=next;
}
//length returns the number of nodes in a linked list
/*Iterative version*/
function length(head) {
  let length=0;
  while(head!=null){
    length++;
    head=head.next;
  }
  return length;
}
/*Recursive version*/
function length(head) {
 	if(!head) return 0;
 	if(!head.next) return 1;
 	else return length(head.next)+1;
}
//count returns the occurrences of an integer in a linked list
/*Iterative version*/
function count(head, data) {
  let counter=0;
  while(!head) {
    if(head.data==data) counter++;
    head=head.next;
  }
  return counter;
}
/*Recursive version*/
function count(head, data) {
  if(!head) return 0;
  if(head.data==data) return count(head.next,data)+1;
  else return count(head.next,data);
}