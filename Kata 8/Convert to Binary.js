// Task Overview
// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

// to_binary(1)  /* should return 1 */
// to_binary(5)  /* should return 101 */
// to_binary(11) /* should return 1011 */
// Example:

// toBinary(1)  /* should return 1 */
// toBinary(5)  /* should return 101 */
// toBinary(11) /* should return 1011 */


function toBinary(n){
	return Number(n.toString(2));
}

const toBinary = n => Number(n.toString(2)); //Function Expression


// Sample Tests:
// 1
// describe("Tests", function(){
// 2
// ​
// 3
// Test.assertEquals(toBinary(1), 1);
// 4
// Test.assertEquals(toBinary(2), 10);
// 5
// Test.assertEquals(toBinary(3), 11);
// 6
// Test.assertEquals(toBinary(5), 101);
// 7

// 8
// });