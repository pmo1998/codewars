
/*The task is to find maximum subarray sum
  maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
  should be 6: [4, -1, 2, 1]
*/
var maxSequence = function(arr){
  if(arr.length==0) return 0;
	let buff={'0':{sum:arr[0]}}, max=0;
	for (let i=1;i<arr.length;i++) {
		if(arr[i]+buff[i-1].sum > arr[i]) buff[i]={sum:arr[i]+buff[i-1].sum}
		else  buff[i]={sum:arr[i]};
		if(buff[i].sum > buff[max].sum) max=i;
	}
	if(buff[max].sum<0) return 0;
	else return buff[max].sum;	
}