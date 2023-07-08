var isPalindrome = function(s) {
   
	s = s.replace(/[^0-9a-zA-Z]+/gmi,"");
	s = s.toLowerCase();
	let i = 0, j = s.length - 1;

	while(i < j) {
		 if(s.charAt(i) != s.charAt(j)) {
			  return false;
		 }
		 i ++;
		 j --;
	}
	return true;
};




