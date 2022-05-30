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
const friends = ['David', 'Michael', 'Samuel'];
//Add elements
console.log(friends);
friends.push('Ray'); //push is a function to the Array 'frirnds', and it returns a value by increasing the left of the Array and adding the value to thre end of an existing array list

console.log(friends);
friends.unshift('Gabriel'); //unshift is also a function that returns a value added to the beginning of an array list
const newLength = friends.unshift('Gabriel')
console.log(newLength)
console.log(friends);

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