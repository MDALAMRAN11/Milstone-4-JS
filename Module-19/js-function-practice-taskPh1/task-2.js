/**Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result. */

function oddEven(numbers) {
    let result = 0;
    if (numbers % 2 === 1) {
        result = numbers * 2;
    } else {
        result = numbers / 2;
    }
    return result;
}
let total = oddEven(16);
console.log(total);
