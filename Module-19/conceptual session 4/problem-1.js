/**Problem - 1(basic math)
তোমাকে cubeNumber() নামে একটা function দেওয়া হয়েছে। functionটা একটা positive input নাম্বার নিবে। 
Task:
input নাম্বারটাকে cube করে result টা রিটার্ন করবে ফাংশন থেকে।
Bonus: ইনপুট হিসেবে number টাইপ এর পরিবর্তে অন্য কিছু দিলে তুমি একটা মিনিংফুল মেসেজ রিটার্ন করে দিবে ফাংশন থেকে। */

function cubeNumber(input) {
    if (typeof input !== "number") {
        return "please provide a valid number.";
    }
    if (input < 0) {
        return " please provide a positive number.";
    }
    let result = input ** 3;
    return result;
}
console.log(cubeNumber(2));
console.log(cubeNumber("abc"));
console.log(cubeNumber(-2));
