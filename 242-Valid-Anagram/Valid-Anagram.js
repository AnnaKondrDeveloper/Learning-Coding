var isAnagram = function(s, t) {

	let sortS = s.split('').sort().join('');
	let sortT = t.split('').sort().join('');
 
	return (sortS == sortT)

};