var search = function(nums, target) {
	let end = nums.length - 1;
	let start = 0;

	while ( start <= end) {
		let mid = Math.floor( (start + end) / 2);

		if ( nums [ mid ] == target) {
			return mid;
		} else if ( target > nums[ mid ]){
			start = mid + 1;
		} else if ( target < nums[ mid ]) {
			end = mid - 1
		}
	}

	return -1;
};