const height = [50, 40, 60, 78, 89, 5, 93, 56, 78, 20];
function minHeight(numbers) {
    let min = numbers[0];
    for (const number of numbers) {
        //console.log(min);
        if (number < min) {
            min = number;
        }
    }
    return min;
}
const minimum = minHeight(height);
console.log(minimum);
