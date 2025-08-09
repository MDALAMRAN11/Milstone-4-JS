/** Task: Filter Long Words with Even Length
You are given a sentence. Your task is to:
Convert the sentence to lowercase.
Split it into words.
Create a new array with words that:
Have more than 4 letters, and
Have even length.
🔁 Then return or print the new array.
Example Input:
"I enjoy learning JavaScript and solving logic problems"
Expected Output:
[ 'enjoy', 'logic' ] */
let sentence = "I enjoy learning JavaScript and solving logic problems";
let modifyed = sentence.toLowerCase().split(" ");
console.log(modifyed);
let newWord = [];
for (let modify of modifyed) {
    if (modify.length > 4 && modify.length % 2 === 0) {
        newWord.push(modify);
    }
}
console.log(newWord);
