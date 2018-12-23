
/*
 arrayToTree  creates a binary tree from its values in accordance to their order, while creating nodes by depth from left to right.
 Example:
  array [17, 0, -4, 3, 15] has the following tree:
  
      17
     /  \
    0   -4
   / \
  3   15

*/
var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

function toTree(index,array) {
	if(index<array.length)  {
  		let node=new TreeNode(array[index]);
  		node.left=toTree(index*2+1,array);
  		node.right=toTree(index*2+2,array);
  		return node;
  	}
}

function arrayToTree(array) {
	return toTree(0,array)
}
