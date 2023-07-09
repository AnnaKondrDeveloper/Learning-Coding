

var removeElement = function(nums, val) {
	var count = 0;
	for ( let i = 0; i < nums.length; i ++){
		if ( nums[i] !== val) {
		nums[count] = nums[i]
		count ++;
		}
	}
	console.log(count);
};

nums = [3,2,2,3], val = 3

removeElement(nums, val);
