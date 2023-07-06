var countOdds = function(low, high) {

	var count;

    if (low % 2 != 0) {
		if( high % 2 != 0) {
			count = (high - low) / 2 + 1;
		}
		if( high % 2 == 0) {
			count = Math.ceil((high - low) / 2) ;
		}
		if ( high / low == 1) {
			count = 1;
		}
	 }

	 if (low % 2 == 0){
		if( high % 2 != 0) {
			count = Math.ceil((high - low) / 2);
		}
		if( high % 2 == 0) {
			count = (high - low) / 2;
		}
		if ( high / low == 1) {
			count = 0;
		}
	 }

	 return count
};