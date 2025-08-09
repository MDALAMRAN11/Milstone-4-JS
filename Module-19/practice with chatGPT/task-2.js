/**✅ Task: Sentence Filtering
📝 তোমাকে একটা sentence দেওয়া হবে। তুমি সেই sentence থেকে শুধু সেই word গুলা বের করবে যেগুলো:

5 অক্ষরের বেশি

‘a’ দিয়ে শুরু হয় না

‘e’ দিয়ে শেষ হয় না

🔁 সবগুলো condition পূরণ করতে হবে */
let sentence =
    "Everyone should always aim to write better and cleaner code in JavaScript";
let newSentence = sentence.toLowerCase().split(" ");
let newWords = [];
for (let words of newSentence) {
    if (words.length > 5 && !words.startsWith("a") && !words.endsWith("e")) {
        newWords.push(words);
    }
}
console.log(newWords);
