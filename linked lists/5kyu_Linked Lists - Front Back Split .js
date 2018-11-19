function Node(data=null,next=null) {
  this.data=data;
  this.next=next;
}
/*frontBackSplit takes one list and splits it into two sublists — one for the front half, and one for the back half
  var source = 1 -> 3 -> 7 -> 8 -> 11 -> 12 -> 14 -> null
  var front = new Node()
  var back = new Node()
  frontBackSplit(source, front, back)
  front === 1 -> 3 -> 7 -> 8 -> null
  back === 11 -> 12 -> 14 -> null
*/

function frontBackSplit(source, front, back) {
    if(!source || !source.next) throw Error("Source list is null or has < 2 nodes");
    if(source.next.next==null) {
        front.data=source.data;
        back.data=source.next.data;
        return;
    }
    let slowPtr=source, fastPtr=source.next.next;
    while(fastPtr) {
      if(!front.data) front.data=slowPtr.data;
      else {
          front.next=new Node(slowPtr.data);
          front=front.next;
      }
      slowPtr=slowPtr.next;
      if(fastPtr.next) fastPtr=fastPtr.next.next;
      else fastPtr=null;
    }
    front.next=new Node(slowPtr.data);
    back.data=slowPtr.next.data;
    back.next=slowPtr.next.next;
  }
