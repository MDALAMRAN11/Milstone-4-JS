/**
 * shirt price --> 500
 * pant price -->300
 * shoe price -->900
 * panjabi price --> 1500
 */

function allQuantity(shirt, pant, shoe, panjabi) {
    const shirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 900;
    const panjabiPrice = 1500;

    const shirtTotal = shirtPrice * shirt;
    const pantTotal = pantPrice * pant;
    const shoeTotal = shoePrice * shoe;
    const panjabiTotal = panjabiPrice * panjabi;

    const totalCost = shirtTotal + pantTotal + shoeTotal + panjabiTotal;
    const Total = "Total-price: " + totalCost;
    if (shirt !== 0) {
        console.log("shirt " + shirt + "pc");
    }
    if (pant !== 0) {
        console.log("pant " + pant + "pc");
    }
    if (shoe !== 0) {
        console.log("shoe " + shoe + "pc");
    }
    if (panjabi !== 0) {
        console.log("panjabi " + panjabi + "pc");
    }

    return Total;
}
console.log(allQuantity(0, 1, 0, 2));
