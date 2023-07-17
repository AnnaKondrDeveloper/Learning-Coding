var moveZeroes = function(nums) {
	let j = 0;

	if (nums.length < 1) return nums

	for ( let i = 0; i < nums.length; i++) {
		 
		 if (nums[i] != 0 ){
			  nums[j] = nums[i];
			  j++;
		 }
	}

	for ( ; j < nums.length; j++) {
		 nums[j] = 0;
	}
	return nums;
};