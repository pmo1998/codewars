function Node(data=null, next=null) {
	this.data=data;
	this.next=next;
}

//move is used to skip repeating nodes
function move(head) {
	if(!head) return null;
	if(head.next && head.data!=head.next.data) return head.next;
	else return move(head.next)
}

/*moveUntil retuns a node which data is more or equal to  given value*/
function moveUntil(head,value) {
	if(!head) return null;
	if(!head.next&& head.data>=value) return head;
	if(head.next && head.data>=value) return head;
	else return moveUntil(head.next,value);
}

function sortedIntersect(first,second) {
  if(!first || !second) return null;
  if(first.data==second.data) return new Node(first.data, sortedIntersect(move(first), move(second)));
  //if first.data < second.data then we need to find a node when data >= second.data
  if(first.data < second.data) return sortedIntersect(moveUntil(first,second.data),second);
  //if second.data < first.data then we need to find a node when data >= first.data
  else return sortedIntersect(first,moveUntil(second,first.data));
}