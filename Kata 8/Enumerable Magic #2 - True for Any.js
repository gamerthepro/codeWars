// Instructions
// Output
// Past Solutions
// Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.

// Ruby: If you get stuck, you can read up here:

// http://www.rubycuts.com/enum-any


const any = (arr, fun) => arr.some(fun);


// Sample Tests:
// 1
// describe("Tests", () => {
// 2
//   it("test", () => {
// 3
// Test.assertEquals(any([1,2,3,4], function(v,i){return v>3}), true)
// 4
// Test.assertEquals(any([1,2,3,4], function(v,i){return v>4}), false)
// 5
// ​
// 6
//   });
// 7
// });
// 8
