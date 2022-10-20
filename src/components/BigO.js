/*  The most optimum algorithm scales in constant time and space. This means it does not care at all about the growth of its inputs. Next best is logarithmic time or space, then linear, linearithmic, quadratic, and exponential. The worst is factorial time or space. In Big-O notation:

Constant: O(1)
Logarithmic: O(log n)
Linear: O(n)
Linearithmic: O(n log n)
Quadratic: O(n²)
Expontential: O(2^n)
Factorial: O(n!)
*/

//the function has Linear time complexity. The bigger n gets the longer time takes to process it.
function sumUp(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}
let start = 0;
let end = 0;
console.log((start = performance.now()));
console.log(sumUp(2000));
console.log((end = performance.now()));
console.log(end - start);

//the function has Constant time complexity. The tame to execute the function is always the same no matter of a size of n.
function sumUp2(n) {
  return (n / 2) * (1 + n);
}

console.log((start = performance.now()));
console.log(sumUp2(2000000));
console.log((end = performance.now()));
console.log(end - start);
