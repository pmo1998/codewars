
/*
	 maxSum returns the maximal sum of a route from root to leaf
	 
	 Example:
		17
	   /  \
	  3   -10
	 /    /  \
	2    16   1
	         /
	        13

The method should return 23, since [17,-10,16] is the route from root to leaf with the maximal su
*/
var TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};

function maxSum(root) {
  if(!root) return 0;
  else {
  	let left_sum=root.value+maxSum(root.left);
  	let right_sum= root.value+maxSum(root.right);
  	return left_sum > right_sum ? left_sum :right_sum;
  }
}
var root = new TreeNode(5, new TreeNode(-22, new TreeNode(9), new TreeNode(50)), new TreeNode(11, new TreeNode(9), new TreeNode(2)));
console.log(maxSum(root));
