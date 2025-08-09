/**Write a program that does the following:

Take a sentence of your choice (you can use the one below or create a new one):
let sentence = "JavaScript makes coding fun and productive with practice";
Convert the sentence into lowercase and split it into individual words.

From those words, select only the words that end with the letter "e" and have more than 4 letters.

Store the filtered words in a new array and print that array. */
let sentence = "JavaScript makes coding fun and productive with practice";
let newSentence = sentence.toLowerCase().split(" ");
let newArray = [];
for (let words of newSentence) {
    if (words.length > 4 && words.endsWith("e")) {
        newArray.push(words);
    }
}
console.log(newArray);
