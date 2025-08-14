const phones = [
    { name: "samsung", price: 20000, color: "black", camera: "12mp" },
    { name: "xiaomi", price: 12000, color: "gray", camera: "12mp" },
    { name: "LG", price: 15000, color: "black", camera: "12mp" },
    { name: "I-phone", price: 150000, color: "white", camera: "12mp" },
    { name: "oppo", price: 25000, color: "black", camera: "12mp" },
];
function maxPrice(numbers) {
    let maximum = numbers[0];
    for (const number of numbers) {
        if (number.price > maximum.price) {
            maximum = number;
        }
    }
    return maximum;
}
const maximum = maxPrice(phones);
console.log("maximum price is: ", maximum);

function minPrice(numbers) {
    let minimum = numbers[0];
    //console.log(minimum);
    for (const number of numbers) {
        if (number.price < minimum.price) {
            minimum = number;
        }
    }
    return minimum;
}
const minimum = minPrice(phones);
console.log("minimum price is: ", minimum);
