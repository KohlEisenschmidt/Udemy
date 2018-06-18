///////////////////////////////////////
// Lecture: variables
// console.log('hello world');

// var name = 'Kohl';

// console.log(name);

// var lastName = 'Eisenschmidt';
// console.log(lastName);

// var age = 31;
// console.log(age);

// var fullAge = true;
// console.log(fullAge);
// //single line comments
// /* multi-line
//     comments */


///////////////////////////////////////
// Lecture: variables 2
// var name = 'Kohl';
// var age = 31;
 
// console.log(name + age);
// console.log(age + age);

// var job, isMarried;

// console.log(job);

// job = 'webDeveloper';
// isMarried = false; 

// console.log(name + ' is a ' + age + 'years old ' + job + '. Is he married? ' + isMarried + ".");

// age = 'thirty one';
// job = 'craftsman';

// console.log(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + ".");

// var lastName = prompt('What is the last name? ')
// console.log(lastName);

// alert(name + ' is a ' + age + ' years old ' + job + '. Is he married? ' + isMarried + ".")


///////////////////////////////////////
 // Lecture: operators

 // var now = 2018;
// var birthYear = now - 31;
// birthYear = now - 31 * 2;
// //2018-61
// //1956
// console.log(birthYear);

// var ageKohl = 31;
// var ageWill = 31;

// ageKohl = ageWill = (3 + 5) * 4 - 6;
// //ageKohl = ageWill = 26
// //ageKohl = 26

// ageKohl++;
// ageWill *= 2;
// //which is the same as 
// ageWill = ageWill * 2;

// console.log(ageKohl);
// console.log(ageWill);

///////////////////////////////////////
// Lecture: if/else statements

// var name = 'Kohl';
// var are = 31;
// var isMarried;

// if (isMarried === 'no') {
// //if false
//     console.log(name + ' is married!');
// } else {
//     console.log(name + ' will hopefully marry soon :) ');
// }

// isMarried = false;
// // if(isMarried) {
// //     console.log('YES');
// // } else {
// //     console.log('NO');
// // }

// if(isMarried) {
//     console.log('NO');
// }

// if (23 == '23') {
//     console.log('something to print...')
// }
// if (23 === '23') {
//     //does not print due to strict operator 
//     console.log('something to print...')
// }


///////////////////////////////////////
// Lecture: boolean logic and switch

// var age = 20;
 
// if (age < 20) {
//     console.log('John is a teenager.');
// } else if (age >= 20 && age < 30) {
//     console.log('John is a young man.')
// } else {
//     console.log('John is a man.');
// }

// var age = 16;

// age >= 20;   // => false
// age < 30;   // => true
// !(age < 30); // => false

// age >= 20 && age < 30; // => false
// age >= 20 || age < 30; // => true

// var job = 'teacher';

// job = prompt('What does John do?');

// switch (job) {
//     case 'teacher':
//         console.log('John teaches kids.');
//         break;
//     case 'driver':
//         console.log('John drives a cab.');
//         break;
//     case 'cop':
//         console.log('John fights crime.');
//         break;
//     default:
//         console.log('John does something else.');
// }

///////////////////////////////////////
// CODING CHALLENGE 1

// John and a friend invented a simple game where the player
//  with the highest value of his height (in centimeters) plus 
//  five times his age wins (what a silly game :)

// 1. Create variables for the heights and ages of two friends
//  and assign them some values
// 2. Calculate their scores
// 3. Decide who wins and print the winner to the console. 
// Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

// 4. EXTRA: Add a third player and now decide who wins.
//  Hint: you will need the && operator to take the decision. 
//  If you can't solve this one, just watch the solution, it's
//   no problem :)

// var heightJackInches = 72;
// var heightJillInches = 66;
// var heightJacobiInches = 76;

// var JackAge = 25;
// var JillAge = 27;
// var JacobiAge = 22;

// JackAge *= 5;
// JillAge *= 5;
// JacobiAge *= 5;
// // console.log(JillAge);

// JackScore = heightJackInches + JackAge;
// JillScore = heightJillInches + JillAge;
// JacobiScore = heightJacobiInches + JacobiAge;

//or JackScore = heightJackInches + 5 * JackAge; 

// console.log(JackScore);
// console.log(JillScore);
// console.log(JacobiScore);

// if (JackScore > JillScore && JacobiScore) {
//     console.log('Jack\'s score is' + JackScore + ' and is the Silly Game Winner!');
// } else if (JillScore > JackScore && JacobiScore) {
//     console.log('Jill\'s is score is ' + JillScore + ' and is the Silly Game Winner!');
// } else if (JacobiScore > JackScore && JillScore) {
//     console.log('Jacobi\'s is score is ' + JacobiScore + ' and is the Silly Game Winner!');
// } else {
//     console.log('It\'s a draw!');
// }



///////////////////////////////////////
// Lecture: Functions

function CalculateAge(yearOfBirth) {
    var age = 2018 - yearOfBirth;
    return age;
}

var ageJohn = CalculateAge(1998);
var ageMike = CalculateAge(1969);
var ageMary = CalculateAge(1948);
console.log(ageMary);

function yearsUntilRetirement(name, year) {
    var age = CalculateAge(year);
    var retirement = 65 - age;
    console.log(retirement);
}

yearsUntilRetirement('John', 1980);