function Node(data=null,next=null) {
	this.data=data;
	this.next=next;
}
/*	alternatingSplit() function takes one list and divides up its nodes to make two smaller lists. 
  	var list = 1 -> 2 -> 3 -> 4 -> 5 -> null
	alternatingSplit(list).first === 1 -> 3 -> 5 -> null
	alternatingSplit(list).second === 2 -> 4 -> null
*/
function alternatingSplit(list,first,second) {
	if(!list || !list.next) throw Error("");
	first.data=list.data;
	second.data=list.next.data; 
	if(list.next.next) list=list.next.next;
	while(list) {
		first.next=new Node(list.data);
		first=first.next;
		if(list.next) {
			second.next=new Node(list.next.data);
			second=second.next;
			list=list.next.next;
		}
		else list=list.next;

	}
}
