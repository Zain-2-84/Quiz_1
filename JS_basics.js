// Question 1:
let result1;
let score = 80;

result1 = score >= 80 ? "True" : "False";
console.log('Is score greater than and equal to 80? ' + result1);

// Question 2:

// Question 3:

// Question 4:

// const question3Result = arr.reduce((acc, curr) => {
//     return acc + curr;
// }, 0);

// console.log(question3Result);

// let averageValue = question3Result / arr.length;
// console.log(averageValue);
// function question3Result (arr, b){
//     if(i = 0; i <= arr.length[]; i++;){
//         const addValue = i + arr;
//     }
// }

function calculateAverage(numbers) {
  // Check if the array is not empty
  if (numbers.length === 0) {
    return null; // Return null for an empty array (you can choose a different approach based on your requirements)
  }

  // Calculate the sum of numbers
  const sum = numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber, 0);

  // Calculate the average
  const average = sum / numbers.length;

  return average;
}

const numbersArray = [10, 20, 30, 40, 50];
const result = calculateAverage(numbersArray);

console.log("Average:", result);
  


// Question 5:

// Question 6:
// let student = [
//     {name: 'Zain', age: 22, grades: 'B+'},
//     {name: 'Azhar', age: 23, grades: 'B+'},
//     {name: 'Jameel', age: 26, grades: 'C+'},
//     {name: 'Sohail', age: 21, grades: 'C'},
// ];

// const question4Result = student.reduce((acc, curr) => {
//     return {grades: student.grades}
// }, 0);

// calculateAverage = 

const student = {
  name: "John",
  age: 20,
  grades: [85, 90, 78, 95, 88],

  calculateAverage: function () {
    // Check if the grades array is not empty
    if (student.grades.length === 0) {
      return null; // Return null for an empty array (you can choose a different approach based on your requirements)
    }

    // Calculate the sum of grades
    const sum = student.grades.reduce((acc, curr) => acc + curr, 0);

    // Calculate the average
    const average = sum / student.grades.length;

    return average;
  }
};

const averageGrade = student.calculateAverage();

console.log(`${student.name}'s Average Grade:`, averageGrade);

// Question 8
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
  const isEven = number % 2 === 0;
  const message = isEven ? "Even" : "Odd";

  console.log(number + " is " + message);
}

// Question 10
const students = [
  { name: 'Alice', grades: { math: 90, english: 85 } },
  { name: 'Bob', grades: { math: 88 } },
  { name: 'Charlie' } // Charlie has no grades property
];

for (const student of students) {
  // Using optional chaining to access the math grade property
  const mathGrade = student?.grades?.math;

  // Checking if the property is defined before logging
  if (mathGrade !== undefined) {
    console.log(student.name +  "'s " + 'math grade: ' + mathGrade);
  } else {
    console.log(student.name + ' has no math grade available.');
  }
}

// Question 11
const person = {
  name: 'John',
  age: 30,
  gender: 'male'
};

for (const key in person) {
  if (person.hasOwnProperty(key)) {
    const value = person[key];
    console.log('Property: ' + key, ' Value: ' + value);
  }
}

// Question 13:
function calculateTax(income) {
  const taxRate = income <= 50000 ? 0.1 : income <= 100000 ? 0.15 : 0.2;
  return income * taxRate;
}

const income1 = 45000;
const tax1 = calculateTax(income1);
console.log('Tax for ' + income1 + ' : ' + tax1);

const income2 = 75000;
const tax2 = calculateTax(income2);
console.log('Tax for ' + income2 + ' : ' + tax2);

// Question 14:
const car = {
  make: 'Toyota',
  model: 'Camry',
  startEngine: function() {
    console.log('Engine started! Vroom vroom!');
  }
};

car.startEngine();