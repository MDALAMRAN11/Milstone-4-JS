/**Problem - 2

তোমাকে একটা function দেওয়া হবে called “matchFinder()” যা ইনপুট হিসেবে দুইটা string নিবে। 

Task:
যদি প্রথম স্ট্রিংটির কোনো একটি অংশের সাথে দ্বিতীয় স্ট্রিংটির পুরোপুরি মিল খুজে পাও সেক্ষেত্রে তুমি true রিটার্ন করবে। 
আর যদি পুরোপুরি মিল খুজে না পাও সেক্ষেত্রে তুমি false রিটার্ন করবে।  
Bonus: দুটি ইনপুট স্ট্রিং দেওয়া হলো কিনা সেটা validate করবে। যদিদুইটি বা যেকোনো একটি ইনপুট স্ট্রিং না হয় সেক্ষেত্রে তুমি একটা মিনিংফুল মেসেজ রিটার্ন করে দিবে।  */
function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
        return "please input an string here";
    } else if (string1.includes(string2)) {
        return true;
    } else {
        return false;
    }
}
console.log(matchFinder("john doe", "ohn"));
console.log(matchFinder(99, "86"));
