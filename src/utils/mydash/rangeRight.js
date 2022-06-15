import range from "./range";

function rangeRight(...args) {
  const [start, end, step] = args;
  return range(start, end, step, true);
}

export default rangeRight;

/*
rangeRight(4); // => [3, 2, 1, 0]
rangeRight(-4); // => [-3, -2, -1, 0]
rangeRight(1, 5); // => [4, 3, 2, 1]
rangeRight(0, 20, 5); // => [15, 10, 5, 0]
rangeRight(0, -4, -1); // => [-3, -2, -1, 0]
rangeRight(1, 4, 0); // => [1, 1, 1]
rangeRight(0); // => []
*/

console.log(rangeRight(4));
console.log(rangeRight(-4));
console.log(rangeRight(1, 5));
console.log(rangeRight(0, 20, 5));
console.log(rangeRight(0, -4, -1));
console.log(rangeRight(1, 4, 0));
console.log(rangeRight(0));
