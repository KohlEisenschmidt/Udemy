script tag in html or with a src link that points to a js file 

console.log 
then console.log a variable 


PRIMITIVE JS DATA TYPES 

NUMBER: Floating point numbers for decimals and integers
STRING: Sequence of characters, used for text
BOOLEAN: Logical data type that can only be true or false
UNDEFINED: Data type of a variable which does not have a value yet.
NULL: Also means 'not-existent' 

//single line comments
/* multi-line
    comments */


JS knows when to combine datatypes
var name = 'Kohl';
var age = 31;
console.log(name + age);    
Kohl31
console.log(age + age);     
62  

we can have two variables listed 
var job, isMarried;

Script reads from top to bottom so if you define a var and do something like console.log it then redefine further down the page and console.log it again you will get two different logs as you go down the page. 

Like Console.log we can use 
prompt and alert
(both of these dont show in a console but rather in a pop up)
