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

// function CalculateAge(yearOfBirth) {
//     var age = 2018 - yearOfBirth;
//     return age;
// }

// var ageJohn = CalculateAge(1990);
// var ageMike = CalculateAge(1969);
// var ageMary = CalculateAge(1948);
// // console.log(ageJohn);

// function yearsUntilRetirement(name, yearOfBirth) {
//     var age = CalculateAge(yearOfBirth);

//     //same thing however we can use different
//     //  names so we dont confuse ourselves
// // function yearsUntilRetirement(name, year) {
// //     var age = CalculateAge(year);
//     var retirement = 65 - age;
//     // console.log(retirement);

//     if (retirement >= 0){
//         console.log(name + ' retires in ' + retirement + ' years.');
//     } else { 
//         console.log(name + ' has already retired.');
//     }
// }

// yearsUntilRetirement('John', 1990);
// yearsUntilRetirement('Mike', 1969);
// yearsUntilRetirement('Mary', 1948);



///////////////////////////////////////
// Lecture: Statements and expressions

//function declaration 
// function whatDoYouDo(job, firstName) {}

//function expression 
// var whatDoYouDo = function (job, firstName) {
//     switch(job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code';
//         case 'driver':
//             return firstName + ' drives a cab in Lisbon';
//         case 'designer':
//             return firstName + ' designs beautiful websites';
//         default:
//             return firstName + ' does something else';
//     }
// }
//  console.log(whatDoYouDo('teacher', 'John'));
//  console.log(whatDoYouDo('driver', 'Jane'));
//  console.log(whatDoYouDo('Retired', 'Mark'));
 

///////////////////////////////////////
// Lecture: Arrays

//Initialize new Array
// var names = ['John', 'Mark', 'Jane'];
// var years = new Array(1990, 1969, 1948);

// console.log(names[0]); 
// console.log(names); 
// console.log(names.length); 

// //mutate array data
// names[1] = 'Ben';
// // names[5] = 'Mary';
// names[names.length] = 'Mary';
// console.log(names);

// //Different data types
// var john = ['John', 'Smith', 1990, 'teacher', false];
// john.push('blue');
// john.unshift('Mr.');
// john.pop();
// john.shift();
// console.log(john);

// // console.log(john.indexOf(22));

// var isDesigner = john.indexOf('designer') === -1 
// ? /*(? = then)*/ 'John is NOT a designer' 
// : /* : = and else */ 'John is a designer';
// console.log(isDesigner);


///////////////////////////////////////
// CODING CHALLENGE 3   (videos seem out of order)
//(videos seem out of order, this coding challenge is not 
// in the Basics-Final   oh well extra practice )

/*
John and his family went on a holiday and went to 3 different 
restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip 
calculator (as a function). He likes to tip 20% of the will 
when the bill is less than $50, 15% when the bill is between 
$50 and $200, and 10% if the bill is more than $200,

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply 
    if with 20/100 = 0.2)

*/
//  124
//  48 
//  268

//  20%  < $50
//  15%  >= $50 <= $200
//  10%  > $200

 function tipCalculator(bill) {
     var percentage;
    if (bill < 50){
        percentage = .2;
    } else if (bill >= 50 && bill < 200){
        percentage = .15;
    } else { 
        percentage = .1;
    }
    return percentage * bill;
 }
 
//  console.log(tipCalculator(10));

var bills = [124, 48, 268];

var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2]) ];
        // console.log(tips);

var fullAmount = [bills[0] + tips[0],
                  bills[1] + tips[1], 
                  bills[2] + tips[2] ]; 
        console.log(tips, fullAmount);



///////////////////////////////////////
// Lecture: Objects