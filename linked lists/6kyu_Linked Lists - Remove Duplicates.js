
function Node(data=null,next=null) {
	this.data=data;
	this.next=next;
}

//removeDuplicates takes a list sorted in increasing order and deletes any duplicate nodes from the list
function removeDuplicates(list) {
  if(!list || !list.next) return list;
  let head=list;
  while(head) {
      if(head.next && head.data==head.next.data) head.next=head.next.next;
      else head=head.next;
  }
  return list;
}