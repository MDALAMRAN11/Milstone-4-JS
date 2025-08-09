/**Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string. */

function count_zero(binarys) {
    let count = 0;
    for (let binary of binarys) {
        if (binary === "0") {
            count++;
        }
    }
    return count;
}
let binarys = "10011000010100101000";
let count0 = count_zero(binarys);
console.log("total 0 of this string: " + count0);
