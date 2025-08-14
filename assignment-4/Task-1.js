function totalFine(fare) {
    // You have to write your code here
    const sarCharge = fare * (20 / 100);
    const serviceCharge = 30;
    const totalCharge = fare + sarCharge + serviceCharge;
    if (fare <= 0 || typeof fare === "string") {
        return "Invalid";
    } else {
        return totalCharge;
    }
}
// console.log(totalFine("65"));
