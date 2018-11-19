function Node(data=null, next=null) {
  this.data = data;
  this.next = next;
}


//sortedInsert inserts a node into the correct location of a pre-sorted linked list which is sorted in ascending order. 
function sortedInsert(head, data) {
  if(!head|| data<head.data) return new Node(data,head);
  let node=head;
  while(node){
      if(node.next && node.data<=data &&  data<=node.next.data) {
      let newNode=new Node(data,node.next);
      node.next=newNode;
      return head;
    }
    if(node.data<=data && !node.next) { //inserting a new node at tail of a list
      node.next=new Node(data);
      return head;
      }
    else node=node.next;
  }
  return head;
}