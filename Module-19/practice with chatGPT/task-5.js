/**Write a JavaScript program that:

Takes a sentence.

Splits it into words.

Finds all words that:

Have exactly 6 letters

Do NOT include the letter "e"

Push those words into a new array. */
let sentence = "Solving coding tasks daily builds strong skill temple";
let newSentence = sentence.split(" ");
let newArray = [];
for (let words of newSentence) {
    if (words.length === 6 && !words.includes("e")) {
        newArray.push(words);
    }
}
console.log(newArray);
