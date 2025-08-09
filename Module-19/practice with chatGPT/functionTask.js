// function sumOfArray(array) {
//     for (let sum of array) {
//         let sum = sum + array;
//     }
// }
// let array = [23, 56, 89, 80, 20, 30, 40];
// sumOfArray(array);

// function sumOfNumbers(numbers) {
//     let sum = 0;
//     for (let number of numbers) {
//         sum = sum + number;
//     }
//     return sum;
// }
// let numbs = [20, 50, 80, 80, 2, 3, 5];
// const sum = sumOfNumbers(numbs);
// console.log(sum);

// function sumOfEven(numbers) {
//     let sum = 0;
//     for (let number of numbers) {
//         if (number % 2 === 0) {
//             sum = sum + number;
//         }
//     }
//     return sum;
// }

// const numbs = [2, 4, 6, 8, 9, 7, 13, 14, 16, 19];
// let evenNumber = sumOfEven(numbs);
// console.log(evenNumber);

function sumOfOdd() {
    let odd = [];
    for (let number of numbers) {
        if (number % 2 === 1) {
            odd.push(number);
        }
    }
    return odd;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log(sumOfOdd(numbers));
