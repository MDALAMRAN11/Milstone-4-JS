/**Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming */

const sentence = "I am learning Programming to become a programmer";
const newSentence = sentence.split(" ");
function maxWord(words) {
    let wordlength = words[0];
    for (const word of words) {
        if (word.length > wordlength.length) {
            wordlength = word;
        }
    }
    return wordlength;
}
console.log(maxWord(newSentence));
