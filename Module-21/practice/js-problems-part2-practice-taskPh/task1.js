/**
 * Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
 */

const heights2 = [167, 190, 120, 165, 137, 10];
function lowestNumber(numbers) {
    let lowest = numbers[0];
    for (number of numbers) {
        if (number < lowest) {
            lowest = number;
        }
    }
    return "lowest number is: " + lowest;
}
console.log(lowestNumber(heights2));
