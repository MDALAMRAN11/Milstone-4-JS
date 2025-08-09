/*Task 6
Given an array of student objects, print each student’s name and marks. 
[
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 }
]
Expected ooutput:
John scored 85
Alice scored 90*/

let object = [
    { name: "John", marks: 85 },
    { name: "Alice", marks: 90 },
];
let nameBoth = "";
let scoreBoth = "";
for (let n of object) {
    nameBoth = n.name;
}
for (let s of marks) {
    scoreBoth = s.marks;
}
console.log(nameBoth + scoreBoth);

// console.log(object);
// let output = object.name + " scored " + object.marks;
// console.log(output);
