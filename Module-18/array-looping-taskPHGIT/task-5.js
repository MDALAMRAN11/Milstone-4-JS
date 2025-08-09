/**Task 5
Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

Input: [1, 2, 3]

Expected Output:

Original: [1, 2, 3] Copy: [99, 2, 3] */
let orginal = [1, 2, 3];

let newSentence = [].concat(orginal);
newSentence[0] = 99;
//console.log(newSentence);

let newSentence2 = [...orginal];
newSentence2[0] = 99;
//console.log(newSentence2);

let newSentence3 = Array.from(orginal);
newSentence3[0] = 99;
console.log(newSentence3);
