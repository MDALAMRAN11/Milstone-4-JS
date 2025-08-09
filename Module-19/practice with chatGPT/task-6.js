/**Task: Filter and Transform Custom Objects
You have an array of student objects. Each student has:
name (string)
marks (number)
passed (boolean)
👉 Your job is to:
Filter the students who passed and have marks more than 80.
Create a new array that contains only the names of those filtered students in uppercase. */
const students = [
    { name: "Alice", marks: 75, passed: true },
    { name: "Bob", marks: 85, passed: true },
    { name: "Charlie", marks: 60, passed: false },
    { name: "David", marks: 90, passed: true },
    { name: "Eve", marks: 78, passed: true },
];

let newArray = [];
for (let student of students) {
    if (student.passed === true && student.marks > 80) {
        newArray.push(student.name.toUpperCase());
    }
}
console.log(newArray);
