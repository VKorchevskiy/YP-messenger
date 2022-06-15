function range(...args) {
  const [start, end, step, isRight] = args;
  let result;

  if (start !== undefined && end === undefined && step === undefined) {
    result = Array.from({ length: Math.abs(start) }).map((_, i) =>
      start > 0 ? i : -i
    );
  } else if (start !== undefined && end !== undefined && step === undefined) {
    result = Array.from({ length: Math.abs(end - start) }).map((_, i) =>
      end - start > 0 ? start + i : start - i
    );
  } else if (start !== undefined && end !== undefined && step !== undefined) {
    result =
      step === 0
        ? Array.from({ length: end - start }).map((_) => start)
        : Array.from({ length: (end - start) / step }).map(
            (_, i) => start + step * i
          );
  }
  return isRight ? result.reverse() : result;
}

console.log(range(4));
console.log(range(-4));
console.log(range(1, 5));
console.log(range(0, 20, 5));
console.log(range(0, -4, -1));
console.log(range(1, 4, 0));
console.log(range(0));

/*
 * range(4); // => [0, 1, 2, 3]
 * range(-4); // => [0, -1, -2, -3]
 * range(1, 5); // => [1, 2, 3, 4]
 * range(0, 20, 5); // => [0, 5, 10, 15]
 * range(0, -4, -1); // => [0, -1, -2, -3]
 * range(1, 4, 0); // => [1, 1, 1]
 * range(0); // => []
 */

export default range;
