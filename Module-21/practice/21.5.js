const shopping = [
    { name: "shirt", price: 500, quantity: 4 },
    { name: "pant", price: 1500, quantity: 3 },
    { name: "panjabi", price: 1500, quantity: 5 },
    { name: "short-pant", price: 150, quantity: 10 },
    { name: "t-shirt", price: 200, quantity: 2 },
    { name: "towel", price: 800, quantity: 1 },
];
function totalQprice(numbers) {
    let totalQ = 0;
    let priceQuantity = 0;
    for (const number of numbers) {
        priceQuantity = number.price * number.quantity;
        totalQ += priceQuantity;
    }
    return totalQ;
}
const totalQ = totalQprice(shopping);
console.log(totalQ);

// function totalPrice(numbers) {
//     let total = 0;
//     for (const number of numbers) {
//         total += number.price;
//     }
//     return total;
// }
// const total = totalPrice(shopping);
// console.log(total);
