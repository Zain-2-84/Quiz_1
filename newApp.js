// Question 1
let myName = 'Samantha';
let reverseName = '';

for (let i = myName.length -1; i >= 0; i--) {
    reverseName += myName[i];
}

console.log(reverseName);

// Question 2
// creating vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];

function countVowel(str) {
    // Setting the initial count of counter to zero
    let count = 0;

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
        
    }

    // return number of vowels
    return count;
}

// take input
const userInputString = prompt('Enter your string here: ');
const result = countVowel(userInputString);

console.log(result);

// Question 3
const word = 'carnivore';

const capitalizeFirstLetterOfWord = word[0].toUpperCase() + word.slice(1);
console.log(capitalizeFirstLetterOfWord);

// Question 4
// program to check if the string is palindrome or not

function checkPalindrome(string) {

    // find the length of a string
    const len = string.length;

    // loop through half of the string
    for (let i = 0; i < len / 2; i++) {

        // check if first and last string are same
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

// take input
const string = prompt('Enter a string: ');

// call the function
const value = checkPalindrome(string);

console.log(value);

// Question 5
const arr = [12, 22, 34, 45];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    
}

console.log(sum);

// Question 6
const arr1 = [1, 2, 3, 4, 0, 8];

// Target element
const target = 0;

const outputIndex = arr1.indexOf(target);

// if not found display.
if (outputIndex === -1) {
    console.log(target + 'is not present inside the "arr" array.');
} else {
    console.log('The first index of ' + target + ' is: ' + outputIndex);
}

// Question 7
let arr2 = ["apple", "mango",
		"apple", "orange", "mango", "mango"];

function removeDuplicates(arr2) {
	let unique = [];
	for (let i = 0; i < arr2.length; i++) {
		if (unique.indexOf(arr2[i]) === -1) {
			unique.push(arr2[i]);
		}
	}
	return unique;
}
console.log(removeDuplicates(arr2));

// Question 8
let arr3 = [5, 2, 7, 1, 0];

function bubbleSort(arr3){
    for (let i = 0; i < arr3.length - 1; i++){

        let swapped = false

        for (let j = 0; j < arr3.length - i - 1; j++){
            // swapping the elements
            if (arr3[j] > arr3[j+1]){
                let temp = arr3[j]
                arr3[j] = arr3[j+1]
                arr3[j+1] = temp
                swapped = true
            }
        }

        // if no elements are swapped
        // that means our array is sorted
        if(!swapped) break;
    }

    return arr3;
}

console.log("Before sorting: ", arr3);
console.log("After sorting: ", bubbleSort(arr3));

// Question 9
let i=1; 
while (i<=20){

  if(i%2==0){
  console.log(i);
  }
  i++;

}

// Question 10
var n,f;
    
    n=prompt("Enter any value");
    f=1;
    do
    {
    f=f*n;
    n=n-1;
    
    }while(n>0);
        document.write("Calculated Factorial= "+f);
        console.log(f);

// Question 11
// create an object
const data = {
    name: 'Shubham',
    designation: 'Software Engineer'
  }
  
  // iterate over object
  for (const obj in data) {
    // print key and value on console
    console.log(`${obj}: ${data[obj]}`);
  }

// Question 12

// Sample array
let myArray = [1, 2, 3, 4, 5];

// Loop through the array and double each element
for (let i = 0; i < myArray.length; i++) {
  myArray[i] *= 2;
}

// The original array is now modified
console.log(myArray);

// Question 13
function checkEvenOrOdd(number) {
    if (number % 2 === 0) {
      return 'The number is even.';
    } else {
      return 'The number is odd.';
    }
  }
  

console.log(checkEvenOrOdd(4));
console.log(checkEvenOrOdd(7));  

// Question 14
function findMax(a, b, c) {
    return (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);
  }
  
console.log(findMax(3, 7, 1));

// Question 15
  function isLeapYear(year) {
    // Leap years are divisible by 4
    // However, years divisible by 100 are not leap years, unless they are also divisible by 400
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }
  
console.log(isLeapYear(2020));
console.log(isLeapYear(2021));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));