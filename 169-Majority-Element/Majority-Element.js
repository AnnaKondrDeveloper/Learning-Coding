var majorityElement = function(nums) {
      let majority = nums[0];
  let voice = 1;

  for ( let i = 1; i < nums.length; i++) {

      if ( voice == 0) {
          voice ++;
        majority = nums[i]
      } else if ( majority == nums[i]) {
          voice ++
      } else {
          voice --;
      }
  }  

  return majority;
};