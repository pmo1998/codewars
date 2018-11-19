function Node(data=null,next=null) {
	this.data=data;
	this.next=next;
}

//insertNth inserts a new node at any index within a list.
function insertNth(head, index, data) {
  if(!head && index==1) throw new Error("Invalid index value should throw error.");
  if(!head) return new Node(data);
  if(index==0) return new Node(data,head);
  head.next=insertNth(head.next, index-1, data);
  return head;
}
