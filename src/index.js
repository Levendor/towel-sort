
module.exports = function towelSort(matrix) {
  if (!Array.isArray(matrix)) return [];
	let n = 0;
	return matrix.reduce((accum, item, index) => {
		if (index === 2*n){
			n++;
			return accum.concat(item)
		} else {
			return accum.concat(item.reverse())			
		};
	}, []);	
}

// module.exports = function towelSort (matrix) {
//   return [];
// }
