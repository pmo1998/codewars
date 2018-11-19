function Node(data=null,next=null) {
  this.data = data;
  this.next = next;
}
//sortedMerge takes two lists, each of which is sorted in increasing order, and merges the two together into one list which is in increasing order
function sortedMerge(first, second) {
  if(!first) return second;
  if(!second) return first;
  if(first.data<second.data) return new Node(first.data,sortedMerge(first.next,second));
  else return new Node(second.data,sortedMerge(first,second.next));
  
}