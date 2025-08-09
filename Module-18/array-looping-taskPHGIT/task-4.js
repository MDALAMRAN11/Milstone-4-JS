/**Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I' */

let reverseSentence = "";
const statement = "I am a hard working person";
const splitStatement = statement.split(" ");
for (let word of splitStatement) {
    reverseSentence = word + " " + reverseSentence;
}
console.log(reverseSentence.trim());
