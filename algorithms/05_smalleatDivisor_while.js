let smallestDivisor = (n) => {
if (n <= 0 ) {
	return NaN;
	}

if (n === 1) {
	return n;
}
let d = 2;
	
while ( n % d !== 0) {
	d = d + 1;
	}
	return d;
	
}

console.log (smallestDivisor(15)); //3
