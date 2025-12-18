let grade;

let engmarks = Number(prompt("Enter your marks for: English"));
let matmarks = Number(prompt("Enter your marks for: Maths"));
let scimarks = Number(prompt("Enter your marks for: Science"));
let hindimarks = Number(prompt("Enter your marks for: Hindi"));
let sclscimarks = Number(prompt("Enter your marks for: Social Science"));

let totalmarks = engmarks + matmarks + scimarks + hindimarks + sclscimarks;
let averagemarks = totalmarks / 5;

if (averagemarks >= 90) {
  grade = "A+";

} else if (averagemarks >= 80) {
  grade = "A";

} else if (averagemarks >= 70 && averagemarks <= 79) {
  grade = "B";

} else if (averagemarks >= 60 && averagemarks <= 69) {
  grade = "C";

} else if (averagemarks >= 50 && averagemarks <= 59) {
  grade = "D";

} else if (averagemarks < 50) {
  grade = "F";

} else {
  alert("Invalid Input!!");
}

alert(
  `Hi! \n
  Total mark: ${totalmarks} out of 500 \n 
  Average mark: ${averagemarks} \n
  Grade: ${grade}`
);