
function Node(data=null,next=null) {
	this.data=data;
	this.next=next;
}

//append adds nodes from second list to first list 
function append(first,second) {
	if(!first) return second;
	if(!second) return first;
	first.next=append(first.next,second);
	return first;
}