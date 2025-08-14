/**Task-3:
Write a function to count the number of vowels in a string. */

const string = "hello my name is md al amran.";
const newString = string.split("");
function getVowels(string) {
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    for (const latter of string) {
        for (const vowel of vowels) {
            if (vowel === latter) {
                count++;
            }
        }
    }
    return count;
}
console.log(getVowels(newString));
