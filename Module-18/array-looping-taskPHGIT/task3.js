/**Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik' */

var numbers = ["Tom", "Tim", "Tin", "Tik"];
var numberString = "";
for (let number of numbers) {
    numberString = numberString + number;
}
console.log(numberString.trim());
