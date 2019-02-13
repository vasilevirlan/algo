//This function find a sum between sequence begin  end.
const sequenceSum = (begin, end) => {
	if ( begin > end) { 
		return NaN;
	}
	else if (begin === end) {
		return begin;
		}
	else if (end - begin ==1){ 
		return begin + end;
		}

	else {
		return end + sequenceSum(begin, end - 1);
	}

		}
	

console.log(sequenceSum(1, 10));

