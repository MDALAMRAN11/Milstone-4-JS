/**
 *you bought 100ticket --> pay 100TAKA per ticket
 *you bought 101-200ticket --> pay 90TAKA per ticket
 *you bought more than 200ticket --> pay only 70TAKA per ticket
 */
// function discount(tickets) {
//     if (tickets <= 100) {
//         const total = tickets * 100;
//         return total;
//     } else if (tickets <= 200) {
//         const total = tickets * 90;
//         return total;
//     } else {
//         const total = tickets * 70;
//         return total;
//     }
// }
// console.log(discount(250));

/**
 * first 100 --> 100taka
 * 101 to 200 --> 90taka
 * 201 to 300 --> 70taka
 *above 300 --> 50taka
 */

function discount(number) {
    let firstLayer = 0;
    let secondLayer = 0;
    let thirdLayer = 0;
    let fourthLayer = 0;
    if (number <= 100) {
        firstLayer = number * 100;
    } else if (number > 100 && number < 200) {
        secondLayer = number * 90;
    } else if (number > 200 && number < 300) {
        thirdLayer = number * 70;
    } else {
        fourthLayer = number * 50;
    }
    let total = firstLayer + secondLayer + thirdLayer + fourthLayer;
    return total;
}
console.log(discount(150));
