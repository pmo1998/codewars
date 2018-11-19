function Node(data=null,next=null) {
	this.data=data;
	this.next=next;
}

//getNth returns the node stored at the Nth index position
function getNth(node, index) {
    if(!node) throw new Error ("Null linked list should throw error.");
    if(index==0) return node;
    else return getNth(node.next, index-1);
}
