'use script';

function logger() {
    console.log('Excerpt for functions et al')
}


//calling / invoking / running functions
logger()

//Example
// function fruitProcessor(apples, oranges) {
//     const juice = `Juice made with ${apples} apples and ${oranges} oranges`
//     return juice
// };

// const appleOrangeJuice = fruitProcessor(7, 2)
// const orangeJuice = fruitProcessor(0, 4)
// console.log(appleOrangeJuice, orangeJuice)

/*
//Function Declaration
function calcAge1(birthYear) {
    return 2022 - birthYear;
}

const age1 = calcAge1(1985)
console.log(age1)

//Function Expression
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}

const age2 = calcAge2(1986)
console.log(age1, age2)

//Arrow Function
const calcAge3 = birthYear => 2022 - birthYear;
const age3 = calcAge3(1980);
console.log(age3);

//Data flow
const cutPieces = function (fruit) {
    return fruit * 6
};

const fruitProcessor = function (orange, pineapple) {
    const orangePiece = cutPieces(orange)
    const pineapplePiece = cutPieces(pineapple)

    const juice = `Juice made with ${orangePiece} apples and ${pineapplePiece} pineapples`;
    return juice
};

console.log(fruitProcessor(3, 4));
*/

//Coding Challenges #1
//const calcAverage
/*
const avgDolphins = (44 + 23 + 71) / 3
const avgKoalas = (65 + 54 + 49) / 3

const calcAverage = avgDolphins => (44 + 23 + 71) / avgDolphins
const calcAverage2 = avgKoalas => (65 + 54 + 49) / avgKoalas
const avg1 = calcAverage(3)
const avg2 = calcAverage2(3)
console.log(avg2, avg1)

const calcAverage = (a, b, c) => (a + b + c) / 3

let avgDolphins = calcAverage(44, 23, 71)
let avgKoalas = calcAverage(65, 54, 49)
console.log(avgDolphins, avgKoalas)
console.log(avgDolphins)

const checkWinner = function (teamDolphins, teamKoalas) {
    if (teamDolphins >= 2 * teamKoalas) {
        console.log(`Dolphins win👌 (${teamDolphins} vs ${teamKoalas})`);
    } else if (teamKoalas >= 2 * teamDolphins) {
        console.log(`Koalas wins🙌 ${teamKoalas} vs ${teamDolphins})`)
    }
    else { console.log(`No one wins...`) }
}


//checkWinner(645, 245)
//Test 2
avgDolphins = calcAverage(85, 54, 41)
avgKoalas = calcAverage(23, 34, 27)

checkWinner(avgDolphins, avgKoalas);*/



//Arrays - Non-Premitive
/*
const friend1 = 'David';
const friend2 = 'Michael';
const friend3 = 'Samuel';

const friends = ['David', 'Michael', 'Samuel'];
console.log(friends);
console.log(friends[1]);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length)
console.log(friends.length - 1)
console.log(friends[friends.length - 2])

const firstName = 'Damilare'
const enoch = [firstName, 'Olaniran', 2022 - 1994, friends, 'Pharmacist']
console.log(enoch)

//Exercise - Using Functions and Arrays together
const calcAge2 = function (birthYear) {
    return 2022 - birthYear;
}

const years = [1995, 1950, 2011, 1990, 2015];

console.log(calcAge2(years[years.length - 2]));
console.log(calcAge2(years[0]));
console.log(calcAge2(years[2]));

const age1 = calcAge2(years[years.length - 2]);
const age2 = calcAge2(years[0]);
const age3 = calcAge2(years[2]);
const age4 = calcAge2(years[1])

//Functions stored into Arrays
const ages = [calcAge2(years[years.length - 2]), calcAge2(years[0]), calcAge2(years[2]), calcAge2(years[1])];
console.log(age1, age2, age3, age4);
console.log(ages); */

//Basic Array Operations(Method)
/*
const friends = ['David', 'Michael', 'Samuel'];
//Add elements
console.log(friends);
friends.push('Ray'); //push is a function to the Array 'frirnds', and it returns a value by increasing the left of the Array and adding the value to thre end of an existing array list

console.log(friends);
friends.unshift('Gabriel'); //unshift is also a function that returns a value added to the beginning of an array list
const newLength = friends.unshift('Gabriel')
console.log(newLength)
console.log(friends);*/

/*
//Remove elements- do not need passing in argument
friends.pop(); // removes last element
console.log(friends)
const popped = friends.pop()
console.log(popped); // returns the value removed
console.log(friends);
friends.shift() //removes first element
console.log(friends)

console.log(friends.indexOf('Michael'))

console.log(friends.includes('Michael')) // Uses strict equality rule

console.log(friends.includes('Jonah'))

if (friends.includes('Michael')) {
    console.log('I once had a friend named Michael')
}


////////////////////////////////////////
//Coding Challenge #2
const calcTip = function (bill) {
    return bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2
};

const tip1 = calcTip(100);
const tip2 = calcTip(125);
const tip3 = calcTip(555);
const tip4 = calcTip(44);
console.log(tip1, tip2, tip3, tip4);

const bills = [125, 555, 44];

//coding style #1
let tips = [calcTip(125), calcTip(555), calcTip(44)]
console.log(tips);

let totalValue = [(125 + calcTip(125)), (555 + calcTip(555)), (44 + calcTip(44))];
console.log(totalValue);

//coding style #2
tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
//Hard coding
totalValue = [calcTip(bills[0] + bills[0]), bills[1] + calcTip(bills[1]), bills[2] + calcTip(bills[2])];
console.log(totalValue);

//coding style #3
totalValue = [tips[0] + bills[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(totalValue);
console.log(tips);
*/

//Intro to Objects - have values called 'properties' defined by curly braces '{}'
/*const enoch = {
    firstName: 'Damilare',
    lastName: 'Olaniran',
    job: 'Pharmacist',
    age: 2021 - 1995,
    friends: ['Gabriel', 'Moses', 'Jonah'],
    spouse: 'Damilola'
};
console.log(enoch);

//dots and brackets in Object
console.log(enoch.job); // dot "." - an operator, retrieves a property of an object
console.log(enoch['age']); //brackets are used to also call the property as a string

//Using dot and bracket to add more property to the object

enoch.location = 'Nigeria'
enoch['nationality'] = 'Nigerian'

//Using string concatenation, we can still call a property in an object to produce a value correcting to the property
const nameCode = 'Name';

console.log(enoch['first' + nameCode])
console.log(enoch['last' + nameCode])

//bracket notation in object has more utility esp for Users Inferface - UI
const developerInfo = prompt('What would you like to know about Enoch?: firstName, lastName, job, friends, spouse');

if (enoch[developerInfo]) {
    console.log(enoch[developerInfo]);
} else { console.log("Invalid Entry! Choose from the options: 'firstName, lastName, job, friends, spouse' only"); prompt('What would you like to know about Enoch?: firstName, lastName, job, friends, spouse'); console.log(enoch[developerInfo]) };
 */
/*
//Object Method - functions in object
const enoch = {
    firstName: 'Damilare',
    lastName: 'Olaniran',
    job: 'Pharmacist',
    age: 2021 - 1995,
    birthYear: 1995,
    friends: ['Gabriel', 'Moses', 'Jonah'],
    spouse: 'Damilola',
    hasDriversLicense: false,

    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }

    // calcAge: function () {
    //     return 2022 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age
    },
    getSummary: function () { return `${this.firstName} is a ${this.age}-year old ${enoch.job} and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license` }
};

enoch.location = 'Nigeria'
enoch['nationality'] = 'Nigerian';

console.log(enoch);
console.log(enoch.calcAge())
console.log(enoch.age)

console.log(enoch.getSummary())
//console.log(enoch['calcAge'](1994))
*/

/*
//////////////////////////
//Coding Challenge #3
mark = {
    firstName: 'Mark',
    lastName: 'Miller',
    mass: 78,
    height: 1.69,

    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI
    }

};

console.log(mark)
console.log(mark.calcBMI())


john = {
    firstName: 'John',
    lastName: 'Smith',
    mass: 92,
    height: 1.95,

    // calcBMI: function () {
    //     return this.mass / (this.height * this.height)
    // }

    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }

};

console.log(john)
console.log(john.calcBMI())

if (mark.BMI > john.BMI) { console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.calcBMI()}) is higher than ${john.firstName} ${john.lastName}'s BMI (${john.calcBMI()})!`) } else if ((john.BMI > mark.BMI)) { console.log(`${john.firstName} ${john.lastName}'s BMI (${john.calcBMI()}) is higher than ${mark.firstName} ${mark.lastName}'s BMI (${mark.calcBMI()})!`) }



//Iteration: the for loop
// console.log('Lifting weights repetition 1 🏋️');
// console.log('Lifting weights repetition 2 🏋️');

// console.log('Lifting weights repetition 3 🏋️');

// console.log('Lifting weights repetition 4 🏋️');

// console.log('Lifting weights repetition 5 🏋️');
// console.log('Lifting weights repetition 6 🏋️');

// console.log('Lifting weights repetition 7 🏋️');

// console.log('Lifting weights repetition 8 🏋️');

// console.log('Lifting weights repetition 9 🏋️');

// console.log('Lifting weights repetition 10 🏋️');

//for loop keeps running while condition is TRUE
//in for loop, each loop has 3 conponents; 1. counter, 2. condition, 3. increase counter
for (let rep = 1; rep <= 10; rep = rep + 1) {
    console.log(`Lifting weights repetition ${rep} 🏋️`) //rep++ also works in olace of rep = rep +1
}
//use either rep <= 10 0r <11


//Looping Arrays
const enoch = [
    'Damilare',
    'Olaniran',
    2022 - 2015,
    'Pharmacist',
    true,
    ['Gabriel', 'Michael', 'Jonah', 'Oberd'],
    'Nigerian'

]

const types = [];
//either this
// for (let i = 0; i < 7; i++) {
//     console.log(enoch[i])
// }


//or this
for (let i = 0; i < enoch.length; i++) {
    console.log(enoch[i])


    //types[i] = typeof enoch[i]
    types.push(typeof enoch[i]) //in every iteration, new value is added into the empty 'types' array for every loop. push is used so a new value goes into the array
}

console.log(types);

//other example using a year array

const years = [1999, 2002, 2004, 2005, 2014, 2020, 2021];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2033 - years[i])
}
console.log(ages)

//Loop continue and break
//--------CONTINUE------
for (let i = 0; i < enoch.length; i++) {
    if (typeof enoch[i] !== 'string') continue;
    console.log(enoch[i]);
};

//---------BREAK-----------
for (let i = 0; i < enoch.length; i++) {
    if (typeof enoch[i] === 'number') break;
    console.log(enoch[i]);
};
*/
/*
///Backward Loop
const enoch = [
    'Damilare',
    'Olaniran',
    2022 - 2015,
    'Pharmacist',
    ['Gabriel', 'Michael', 'Jonah', 'Oberd'],
    'Nigerian'
]

//Looping backwards--4, 3, 2, 1, 0
for (let i = enoch.length - 1; i >= 0; i--) {
    console.log(enoch[i], i)
}

///Loops in Loop
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----Starting exercise ${exercise}`)

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Lifting Weight repitition ${rep}`);
    }
};
*/


////While Loop

//for the while loop, we can only specify the condition and then the other components are manually defined
/*
let rep = 1;
while (rep < 11) {
    console.log(`Lifting weights repitition ${rep} `);
    rep++;
}

//practical example of while loop usefulness is rolling a dice

//let dice = math.random() * 6 //this will return a decimal on the console
let dice = Math.trunc(Math.random() * 6) + 1; // Math.trunc gets rid of the decimeal and +1 makes the numbers in the dice 6
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1; // added to break of out the loop
    if (dice === 6) {
        console.log(`You rolled a 6! YOU WIN!!!...`);
    }
}
*/

/////////////////////////
//Coding Challenge #4
const bills = [
    22,
    295,
    176,
    440,
    37,
    105,
    10,
    1100,
    86,
    52
]

const tips = [];
const totals = [];

//Bonus Question
for (let i = 0; i < bills.length; i++) {
    tips.push(bills[i] <= 300 && bills[i] >= 50 ? bills[i] * 0.15 : bills[i] * 0.2)
    totals.push(tips[i] + bills[i])
}
console.log(bills, tips, totals)

const sum = []
//bills[0] + bills[1] + bills[2] + bills[3] + bills[4] + bills[5] + bills[6] + bills[7] + bills[8] + bills[9]

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
        //also, sum += arr[i];
    }
    return sum / arr.length
}

console.log(calcAverage(tips));
console.log(calcAverage(totals));