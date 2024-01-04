// Question 3
let people2 = [
    { name: 'John', age: 25 },
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 30 }
];


// Sorting by age in ascending order
people2.sort((a, b) => a.age - b.age);


console.log(people2);

// Question 4
let tenantDatabase = [
    { name: 'Alice', rentPaid: 25000 },
    { name: 'Bob', rentPaid: 20000 },
    { name: 'Charlie', rentPaid: 18000 },
    { name: 'David', rentPaid: 22000 },
    { name: 'Xander', rentPaid: 20000 },
    { name: 'Yvonne', rentPaid: 21000 },
    { name: 'Zoe', rentPaid: 19000 }
];


// Using reduce to count the number of tenants who paid 20,000 or more
let numberOfTenantsPaid = tenantDatabase.reduce((accumulator, tenant) => {
    if (tenant.rentPaid >= 20000) {
        return accumulator + 1; // Increment accumulator if rentPaid meets condition
    }
    return accumulator; // Otherwise, keep the accumulator unchanged
}, 0); // Initialize accumulator with zero


console.log(`Number of tenants who paid 20,000 or more: ${numberOfTenantsPaid}`);

// Question 5
let users = [
    { id: 1, name: 'Alice', role: 'user' },
    { id: 2, name: 'Bob', role: 'admin' },
    { id: 3, name: 'Charlie', role: 'user' },
    { id: 4, name: 'David', role: 'user' },
    // ... (more users)
];


// Using find to locate the first user with the role 'admin'
let adminUser = users.find(user => user.role === 'admin');


if (adminUser) {
    console.log(`Found admin user: ${adminUser.name}`);
} else {
    console.log('No admin user found.');
}

// Question 6
let arrayOfStrings = ['apple', 'banana', 'kiwi', 'grape', 'orange'];


let concatenatedString = arrayOfStrings
    .filter(str => str.length > 3)
    .reduce((acc, current) => acc + current, '');


console.log(concatenatedString);

// Question 7
let workHoursDatabase = [
    { name: 'Alice', hours: 35 },
    { name: 'Bob', hours: 42 },
    { name: 'Charlie', hours: 30 },
    { name: 'David', hours: 38 },
    { name: 'Alice', hours: 40 },
    { name: 'Bob', hours: 45 },
    { name: 'Charlie', hours: 28 }
];


// Callback function to track working hours based on a person's name
function trackWorkingHoursCallback(personEntry, personName) {
    return personEntry.name === personName;
}


// Higher-order function that uses the callback to track working hours
function trackWorkingHoursWithCallback(database, personName, callback) {
    // Using filter to select entries for the specified person using the callback
    let personEntries = database.filter(entry => callback(entry, personName));


    // Using reduce to calculate the total working hours for the specified person
    let totalHours = personEntries.reduce((acc, entry) => acc + entry.hours, 0);


    return totalHours;
}


// Example: Tracking working hours for 'Alice' using the callback function
let trackedHoursForAlice = trackWorkingHoursWithCallback(workHoursDatabase, 'Alice', trackWorkingHoursCallback);
console.log(`Working hours for Alice: ${trackedHoursForAlice} hours`);
// Output: Working hours for Alice: 75 hours


// Question 8
let array = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' },
    { id: 3, name: 'Doe' }
];


let targetId = 4;


let foundElement = array.find(element => element.id === targetId);


if (foundElement === undefined) {
    console.error(`Element with id ${targetId} not found.`);
} else {
    // Continue processing with the found element
    console.log(foundElement);
}

// Question 9
let originalArray = [1, 2, 3, 4, 5];


// Using map to create a new array with each element doubled
let doubledArray = originalArray.map(element => element * 2);


console.log(originalArray); // [1, 2, 3, 4, 5]
console.log(doubledArray);  // [2, 4, 6, 8, 10]

// Question 10
let numbers = [1, 2, 3, 4];
let squaredNumbers = numbers.map(num => num * num);

let sum = 0;
numbers.forEach(num => {
    sum += num;
});

console.log(squaredNumbers);
console.log(sum);

// Question 11:
let arr = [12, 34, 45, 65, 76, 78, 89, 6];
let squareEachNumber = arr.map((arr) => {
    return arr * 2;
});

console.log(squareEachNumber);

// Question 12:
let arrOfNames = ['zain', 'rohan', 'ramis', 'yahya', 'hanan', 'anas'];

let arrOfNamesFiltered = arrOfNames.filter((arrOfNames) => arrOfNames.length < 5);

console.log(arrOfNamesFiltered);

let arrOfNamesCapitalized = arrOfNamesFiltered.map((arrOfNamesFiltered) => {
    return arrOfNamesFiltered.toUpperCase();
})

console.log(arrOfNamesCapitalized);

// Question 13:
// Remember to use [] then {} when creating an object.
let people = [
    {product: 'Surface Cleaner', price: 230},
    {product: 'Washing powder', price: 300},
    {product: 'Liquid detergent', price: 190},
    {product: 'Match box', price: 170}    
];

let peopleSortedDescending = people.sort((a, b) => b.price - a.price);

console.log(peopleSortedDescending);

// Question 14:
let arrOfEvenNumbers = [22, 54, 76, 98, 110, 80, 66];

let arrOfEvenNumbersReduced = arrOfEvenNumbers.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(arrOfEvenNumbersReduced);

// Question 15:
let project = [
    {name: 'Zain', id: 446, status: 'undefined'},
    {name: 'Azhar', id: 551, status: 'undefined'},
    {name: 'Jameel', id: 911, status: 'undefined'}
];

let projectIdFind = project.find((projectIdFind) => projectIdFind = 'Zain'); //You can change the Callback function to any name as long as it matches the argument inside the parameters.
console.log(projectIdFind);

let projectStatusChange = project.map(element => {
    if(element.name === 'Zain') {
        return { ...element, status: 'completed'};
    }
    return element;
});

console.log(projectStatusChange);

// Question 16:
let randomNumberArr = [21, 33, 2, -55, -76];

let randomNumberArrPositive = randomNumberArr.filter((number) => number > 0);

let randomNumberArrReduced = randomNumberArrPositive.reduce((acc, curr) => {
    return acc + curr;
},0);

let randomNumberArrAverage = randomNumberArrReduced / randomNumberArr.length;

let randomNumberArrRounded = randomNumberArrAverage.toFixed(2);

console.log('This is the array rounded to two digits: ' + randomNumberArrRounded);

// Question 17
let newObjects = [
    {name: 'Zair', age: 22},
    {name: 'Zaiqullah', age: 17},
    {name: 'Waris', age: 16},
    {name: 'Abdul', age: 30},
    {name: 'Saleem', age: 35}
];

let collectData = function(objects){
    let filteredData = objects.filter((obj) => obj.age >= 18);
    return filteredData;
};

let resultOfCollectedData = collectData(newObjects);
console.log(resultOfCollectedData);

// Question 18
let string1 = ['Ali', 'Ahmed', 'Moqadas', 'Bilal', 'Mustafa', 'Jinpachi', 'Steve'];

function compareByLength(a, b){
    if(a.length < b.length){
        return -1;
    } else if(a.length > b.length){
        return 1;
    } else {
        return 0;
    }
}

let sortedArray = string1.sort(compareByLength);

console.log(sortedArray);

// Question 19
let multiLayerArr = [ 
    [1, 3, 5], 
    [2, 4, 6], 
    [8, 10, 12] 
];

let flattenArr = [].concat(...multiLayerArr);
let finalSum = flattenArr.reduce((acc, curr) => {
    return acc + curr;
},0)

console.log(finalSum);

// Question 20
let finalArr = [
    {name: 'Garfield', id: 3},
    {name: 'Charlie', id: 4},
    {name: 'Nathan', id: 5}
];

let defaultObject = {name: 'Not found', id: -1};

let foundElement2 = finalArr.find(element => element.id === 6) || defaultObject;

console.log(foundElement2);