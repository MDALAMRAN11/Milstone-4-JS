/**Problem - 3
তোমাকে একটা ফাংশন লিখতে হবে যার নাম হবে sortMaker()। এই ফাংশনের parameter হবে একটি array এবং এই array তে সবসময় দুইটি উপাদান থাকবে।
Task:
যদি অ্যারের দুইটি উপাদান পজিটিভ সংখ্যা হয় সেক্ষেত্রে তুমি অ্যারেটিকে বড়ো থেকে ছোট ক্রমে সাজিয়ে রিটার্ন করবে।
যদি দুইটি উপাদান একই হয় সেক্ষেত্রে তুমি এই স্ট্রিং রিটার্ন করবেঃ “equal”
 Bonus: যদি অ্যারের যেকোনো একটি উপাদান নেগেটিভ সংখ্যা হয় সেক্ষেত্রে তুমি  রিটার্ন  করবে “Invalid Input” */
let array = [12, 12];
function sortMaker(array) {
    if (array[0] < 0 || array[1] < 0) {
        return "Invalid Input";
    } else if (array[0] === array[1]) {
        return "equal";
    } else if (array[0] > 0 && array[1] > 0) {
        array.sort(function (a, b) {
            return b - a;
        });
        return array;
    }
}
console.log(sortMaker(array));
