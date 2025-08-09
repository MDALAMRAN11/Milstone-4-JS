/**Take a sentence of your choice, or use this one:

let sentence = "Learning JavaScript regularly helps build strong logic";
Convert the sentence into lowercase and split it into words.

From those words, select only the ones that:

Have more than 6 letters

Do not start with "l"

After filtering, reverse each of those selected words and store them in a new array. */
let sentence = "Learning JavaScript regularly helps build strong logic";
let newSentence = sentence.toLowerCase().split(" ");
let newArray = [];
for (let words of newSentence) {
    if (words.length > 6 && !words.startsWith("l")) {
        newArray.unshift(words);
    }
}
console.log(newArray);
