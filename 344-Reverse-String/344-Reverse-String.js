var reverseString = function(s) {

	let i = 0;
	let j = s.length - 1;

	while ( i < j ) {
		let temp = s[j]
		s[j] = s[i];
		s[i] = temp;
		j--;
		i++;
	}
	return s
};