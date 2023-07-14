var fib = function(n) {

	let sum = [0, 1];

   if ( n == 0 ) return 0;
	if ( n == 1 ) return 1;

	for ( let i = 2 ; i <= n ; i ++) {
		let tem = sum[i - 1] + sum[ i - 2 ]
		sum.push(tem)
	}

	return sum[n]
};