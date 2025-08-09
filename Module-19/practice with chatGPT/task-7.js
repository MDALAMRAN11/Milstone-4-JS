/**Create a function named getTopStudents() that:
Calculates the average score for each student.
Returns the names of students who have an average greater than or equal to 85.

📌 Requirements:
Use a for...of loop or traditional for loop (do not use map, filter, or reduce yet).
Return the final result as an array of names.
Make sure your function works when new students are added. */
const students = [
    { name: "Ariana", scores: [80, 85, 90] },
    { name: "Brandon", scores: [60, 75, 70] },
    { name: "Clara", scores: [95, 88, 92] },
    { name: "Daniel", scores: [40, 50, 45] },
    { name: "Eva", scores: [88, 79, 85] },
];

function getTopStudents(data) {
    let topper = [];
    for (let student of data) {
        let sum = 0;
        for (let score of student.scores) {
            sum = sum + score;
        }
        let average = sum / student.scores.length;
        if (average >= 85) {
            topper.push(student.name);
        }
    }
    return topper;
}
console.log(getTopStudents(students));

const numbers = [40, 10, 200, 50];
numbers.sort(function (a, b) {
    // console.log(a, b);
    return b - a;
});
// console.log(numbers);
