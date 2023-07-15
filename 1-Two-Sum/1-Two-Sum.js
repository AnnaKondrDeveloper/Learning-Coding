var twoSum = function(nums, target) {
   
	for ( let i = 0; i < nums.length; i++) {
		let x = nums[i];
		for ( let j = i + 1; j < nums.length; j++) {
			let y = nums[j];
			if (  y === target - x ) {
				let index = [];
				index.push( i, j)
				return index
			}
		}
	}
};