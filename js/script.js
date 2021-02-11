// STEP 1 
// convert the followind identifiers to Camel Case notation:

let someMonth;
// function theMonth();
let currentMonth;
let summerMonth;
let myLibraryFunction;

// STEP 2
// example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.

3.14                    // numeric literal
'literal expression'    // string literal expression
true                    // Boolean literal expression
null                    // null literal expression

// STEP 3
// two examples of complex / variable expressions

let oldMonth = 'January';
let g = 5;
let a = g + 12 * g;

// STEP 4
// Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers

// let firstName;
// let lastName;
let address;
let city;
let state;
// let zipCode;
let yourAge;
let referralSource;
let mayWeContactYou;

// STEP 5 ???
// demonstrate 3 ways for declaring and assigning values to 3 of those variables

var firstName = 'Jane';
let lastName = 'Dow';
const zipCode = '994090';

// STEP 6
//  create a variable:
let total;

// add a number and a string
total = 11 + '1';

// display the coerced result in the browser’s console window
window.console.log(total); // 111

// STEP 7
// Create two variables. 
let example1;
let example2;

// For the first variable, add a Boolean and a string and display the coerced result.
example1 = false + ' assignment';
window.console.log(example1); // 'fasle 1 assignment'

// For the second variable, add a number and a Boolean and display the coerced result. 
example2 = 5 + true;
window.console.log(example2); // 6

// STEP 8
// Is the following string literal valid? If not, how would you fix it?
// using excape character '\'
let someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former."';

window.console.log(someString);

// STEP 9
//  Create a variable that produces a null value in the console window. 
let background = null;
console.log(background);

// Then, create a variable that produces an undefined value in the console window.
let text;
console.log(text);

// STEP 10
//  Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.

console.log(typeof('Tuesday')); // string
console.log(typeof(10)); // number
console.log(typeof(true)); // Boolean
console.log(typeof({firstName: 'Jane'})); // object
console.log(typeof(undefined)); // undefined
console.log(typeof(island)); // undefined

// STEP 11
// Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows: 
// Substitute my name for your name and use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.

alert('Hello ' + 'Jane Doe' + ', welcome to the JavaScript class!');

// STEP 12
// Declare a variable called name and set it equal to your name. Substitute your name in the previous alert string with the variable instead.

let name = 'Jane Doe';
alert('Hello ' + name + ', welcome to the JavaScript class!');

// STEP 13
// Declare a variable called course and set it equal to “JavaScript”. 

let course = 'JavaSrcript';

// Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.

// alert('Hello ' + name + ', welcome to the ' + course + ' class!');

// STEP 14
// Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:Hello Zak Ruvalcaba.Welcome to the JavaScript class!

// alert('Hello ' + name + '. \nWelcome to the ' + course + ' class!');

// STEP 15
// Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable. 

// name = prompt('What is your name?');
// alert('Hello ' + name + '. \nWelcome to the ' + course + ' class!');

// STEP 16
// Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.

// name = prompt('What is your name?');
// course = prompt('What class are you taking');
// alert('Hello ' + name + '. \nWelcome to the ' + course + ' class!');

// STEP 17
// Declare a variable called x and assign it a value of 10. Declare a variable called y and assign it a value of 20. Display the sum of those two numbers in the console window. 

// let x = 10;
// let y = 20;

// console.log(x+y);

// STEP 18
// Declare a variable called x and assign it a value of 20. Add and assign 20 to that variable and display the result in the console window. The result should be 40.

// let x = 20;
// x += 20;
// console.log(x);

// STEP 19
// Declare a variable called x and assign it a value of 20. Multiply and assign 5 to that variable and display the result in the console window. The result should be 100.

// let x = 20;
// x *= 5;
// console.log(x);

// STEP 20
// Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.

let x = 20%3;

// Divide and assign 1 to that variable and display the result in the console window. 
x/=1;
// The result should be 2. If you got 6.66 try again.
console.log(x)

// STEP 21
// Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.

let c = 10;
let b = 5;

let result = c <= 10 || b <= 10;
console.log(result);

// STEP 22
// Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.

let z = 25;
let y = 100;

let result2 = z>= 50 && y== 100
console.log(result2)

