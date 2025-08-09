/**Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red'] */

let reverse = [];
const colors = ["red", "blue", "green", "yellow", "orange"];
for (let color of colors) {
    reverse.unshift(color);
}
console.log(reverse);
