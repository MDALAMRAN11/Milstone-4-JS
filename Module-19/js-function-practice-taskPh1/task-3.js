/**Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values. */

function make_avg(numbers, size) {
    let sum = 0;
    let average = 0;
    for (let number of numbers) {
        sum = sum + number;
    }
    average = sum / size;
    return average;
}
let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 200];
let size = numbers.length;
let total = make_avg(numbers, size);
console.log(total.toFixed(2));

// function make_avg(numbers) {
//     let sum = 0;
//     let average = 0;
//     for (number of numbers) {
//         sum = number + sum;
//     }
//     average = sum / numbers.length;
//     return average;
// }

// let numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(make_avg(numbers));
