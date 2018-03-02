        /*Introduction to Control Flow
In this lesson, we'll explore how we can use the building blocks of JavaScript to write programs that make decisions.
Control flow statements enable JavaScript programs to make decisions by executing code based on a condition. 
If a given condition is true, we execute one block of code. 
If the statement is false, we execute another block of code. 
For instance, if we were making a game in which the user had to choose which door to enter, we'd need a way for the program to know what to do once the user was in the next room.
In this lesson, we'll learn how to make decisions with JavaScript and how it can control the program's flow.*/

var isSoccerFan = false;

if (isSoccerFan === true) {
  console.log('Goal!');
} else {
  console.log('No goal!');
}
//---------------------------------------------------------------------------------------------------------
        /*if/else Statements
The core task of programming is writing lists of instructions for computers, or translating our ideas from human-speak to computer-speak.
Let's learn how we can ask JavaScript to think like us and make decisions the way we do.
We'll start with human-speak. Many decisions we make everyday boil down to this sentence in some form:
"If something is true, let's do option 1, or else, if it is false, let's do option 2."
This sentence looks fairly similar when we write it with JavaScript. See for yourself:*/

var needsCoffee = true;
if (needsCoffee === true) {
    console.log('Finding coffee');
} else {
    console.log('Keep on keeping on!');
}

/*Lines of code between curly braces are called blocks. if/else statements have two code blocks. 
If the variable needsCoffee is true, the program will run the first block of code. Otherwise, it will run the other block of code.
needsCoffee is the condition we are checking inside the if's parentheses. 
Since it is equal to true, our program will run the code between the first opening curly brace { (line 2) and the first closing curly brace } (line 4). 
It will ignore the else { ... } part. In this case, we'd see Finding coffee log to the console.
If needsCoffee were false, only the console.log() statement in the else block would be executed.
if/else statements are how programs can process yes/no questions programmatically.*/

var isSoccerFan = false ;

if (isSoccerFan === true) {
  console.log('Goal!');
} else {
  console.log('No goal!');
}
//------------------------------------------------------------------------------------------------------------------------------
        /*True and False Values
In the previous exercise, we wrote if/else statements. If a given condition were true, one block of code would run. 
If that condition were false, a different block of code would run. However, there are data types that are not booleans. 
Let's explore the concepts of true and false in variables that contain other data types, including strings and numbers.
In JavaScript, all variables and conditions have a truthy or falsy value.*/

let variableOne = 'I Exist!';
if (variableOne) {
// This code will run because variableOne contains a truthy value.
} else {
// This code will not run because the first block ran.
}
/*
In the first line of the program above, a variable is created and set. The value of this variable is a string rather than a boolean. 
How does this program determine which code block to run?
The second line of this program checks a condition if (variableOne). In the previous exercise, we checked if a variable was equal to true or false. 
By only writing the name of the variable as the condition, we are checking the truthiness of the variableOne. In this case, variableOne contains a truthy value.
If we changed if (variableOne) to say if (variableTwo), that condition would evaluate to falsy because we have not created a variable called variableTwo in this program. 
In other words, variableOne is truthy and variableTwo is falsy.
All variables that have been created and set are truthy (and will evaluate to true if they are the condition of a control flow statement) 
unless they contain one of the seven values listed below:

            1) false
            2) 0 and -0
            3) "" and '' (empty strings)
            4) null
            5) undefined
            6) NaN (Not a Number)
            7) document.all (something you will rarely encounter)

There is an important distinction between a variable's value and its truthiness: variableOne's value is 'I exist' because that is the data saved to the variable. 
variableOne is truthy because it exists and does not contain any of the seven falsy values listed above.*/

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

var isPhoneCharged = true; 
if (!isPhoneCharged) {
  console.log('Plug in your phone!');
} else {
  console.log('No need to charge!');
}

//--------------------------------------------------------------------------------------------------
        /*True and False Values II
In programming, we often evaluate whether or not an expression is true or truthy. Conveniently, JavaScript provides a shorthand notation for this.*/

var isRaining = true;
if (isRaining) {
   console.log('Carry an umbrella!');
} else {
  console.log('Enjoy the sun!');
}

/*In the example above, the condition is simply if (isRaining). In JavaScript, this is evaluating whether isRaining is truthy. 
If you read the code out loud to yourself, it sounds like a simple sentence: "If it's raining, carry an umbrella. Else, enjoy the sun!"
JavaScript provides an operator for swapping the truthiness and falsiness of values - the exclamation point (!). 
We can use this in conditional statements as shorthand to check if the value of a variable evaluates to false rather than true.*/

var isPhoneCharged = true; 
if (!isPhoneCharged) {
  console.log('Plug in your phone!');
} else {
  console.log('No need to charge!');
}

//In the example above, the program checks if isPhoneCharged evaluates to false. Because isPhoneCharged is true, the second block of code will execute.

var jack = true;

if (jack) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


var hack = 'true';

if (hack) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

var isPhoneCharged = true; 
if (!isPhoneCharged) {
  console.log('Plug in your phone!');
} else {
  console.log('No need to charge!');
}

//--------------------------------------------------------------------------------------------------------------------------
/*Comparison Operators
In addition to checking whether a variable evaluates to true or false, sometimes we need to compare variables to other values. 
We can achieve this with comparison operators.
There are two comparisons you might be familiar with:

          Less than: <
          Greater than: >

You may also recognize these:

          Less than or equal to: <=
          Greater than or equal to: >=

These comparisons evaluate to true or false.*/

var hungerLevel = 10;

if (hungerLevel > 7){
  console.log("Time to eat!")
} else {
  console.log("We can eat later!")
}
//---------------------------------------------------------------------------------------------------------------------------
        /*Comparison Operators II
There are two more useful comparisons we can make. Often, we might want to check if two things are equal to each other or if they are not.

          1) To check if two things equal each other, we write === (three = signs in a row).
          2) To check if two things do not equal each other, we write !== (an exclamation with two = signs in a row).

It can be confusing when to use one = sign and when to use three === signs. Use a single = to assign a value to a variable. 
Use ===to compare the values of two different variables.*/

var moonPhase = "full";
var isFoggyNight = false;

 if (moonPhase === 'full' || isFoggyNight) {
console.log("Arms and legs are getting hairier.");
} else if (moonPhase === 'mostly new') {
 console.log("Back on two feet.");
} else {
console.log("Invalid moon phase");
}
//--------------------------------------------------------------------------------------------------------------------------
/*Logical Operators
We can translate certain thoughts into JavaScript code such as, "Are these things equal?" with ===, or, "Is one thing greater than another thing?" with >.
In English, sometimes we say "both of these things" or "either one of these things.
" Let's translate those phrases into JavaScript with special operators called logical operators.

        1) To say "both must be true," we use &&.
        2) To say "either can be true," we use ||.
For example:*/
var stopLight = 'green';
var pedestrians = false;

if (stopLight === 'green' && pedestrians === false) {
  console.log('Go!');
} else {
  console.log('Stop');
}
/*
In the example above, we make sure that the stopLight is 'green' and (&&) there are no pedestrians before we log Go!.
If either of those conditions is false, we log Stop.
Just like the operators we learned previously, these logical operators will return either true or false.
These logical operators are helpful when writing if/else statements since they let us make sure multiple variables are true or false. 
We can combine these operators with all of the ones we have learned throughout this lesson.*/

var moonPhase = "full";
var isFoggyNight = false;

 if (moonPhase === 'full' || isFoggyNight) {
console.log("Arms and legs are getting hairier.");
} else if (moonPhase === 'mostly new') {
 console.log("Back on two feet.");
} else {
console.log("Invalid moon phase");
}

//----------------------------------------------------------------------------------------------------------------------------------------
/*switch Statements
Before we move on, let's circle back to else if statements.

Using else if is a great tool for when we have a few different conditions we'd like to consider.

else if is limited, however. If we want to write a program with 25 different conditions, like a JavaScript cash register, 
we'd have to write a lot of code, and it can be difficult to read and understand.

To deal with times when you need many else if conditions, we can turn to a switch statement to write more concise and readable code.

To a computer, a switch statement and an if/else statement are the same, but a switch statement can be easier for other humans to read. 
Part of being a good developer is writing code that both computers and other humans can read.

switch statements look like this:

let groceryItem = 'papaya';*/

var groceryItem = 'lime';
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
/*
The switch keyword initiates the statement and is followed by ( ... ), which contains the condition that each case will compare to. 
In the example, the condition is groceryItem.
Inside the block, { ... }, there are cases. case is like the else if part of an if/else if/else statement. 
The word following the first case is 'tomato'. If groceryItem equalled 'tomato', that case's console.log() would run.
groceryItem equals 'papaya', so the first and second case statements are skipped. 
The third case runs since the case is 'papaya', which matches groceryItem's value. This particular program will log Papayas are $1.29.
Then the program stops with the break keyword. This keyword will prevent the switch statement from executing any more of its code. 
Without adding break at the end of each case, the program will execute the code for all matching cases and the default code as well. 
This behavior is different from if/else conditional statements which execute only one block of code.
At the end of each switch statement, there is a default condition. If none of the cases are true, then this code will run.*/

var moonPhase = 'full';

switch (moonPhase) {
  case 'full':
    console.log('Howl!');
    break;
  case 'mostly full':
    console.log('Arms and legs are getting hairier');
    break;
  case 'mostly new': 
    console.log('Back on two feet');
    break;
  default: 
    console.log('Invalid moon phase');
    break;
}
//--------------------------------------------------------------------------------------------------------------------------------------
        /*Ternary Operator
In the previous exercise, we learned shorthand for writing multiple if/else if/else statements to make them easier to read. 
JavaScript also provides a way to shorten simple if/else statements called the ternary operator.*/

var isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

//In the example above, we see a very familiar pattern. See the example below for an equivalent way to express this.

var isNightTime = false;

isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

/*The code in the example above will operate exactly as the code from the previous example. Let's break this example into its parts:

        1) isNightTime ? — the conditional statement followed by a question mark. This checks if isNightTime is truthy.
        2) console.log ('Turn on the lights!') — this code will be executed if the condition is truthy.
        3) : — a colon separates the two different blocks of code that can be executed.
        4) console.log('Turn off the lights!'); — this code will be executed if the condition is falsy.

In this example, we checked if the value of a variable was true or false. The ternary operator can be used for any condition that can be evaluated to true or false, such as those with comparison operators.

age >= 16 ? console.log('You are old enough to drive in the United States!') : console.log('You are not old enough to drive in the United States!');
In the example above, the conditional statement is checking whether the value of the variable age is greater than or equal to 16. 
If so, a message that states the user is old enough to drive will be logged to the console. 
Otherwise, a message that states the user is not old enough to drive will be logged.*/

var isWell = true;

isWell ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

var isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');


let favoritas = 'Love That!';

favoritas === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

//----------------------------------------------------------------------------------------------------------------------------------
        /*Review: Control Flow
Way to go! We just learned a lot of control flow concepts:

1) if/else statements make binary decisions and execute different code based on conditions.
2 )All conditions are evaluated to be truthy or falsy.
3) We can add more conditional statements to if/else statements with else if.
4) switch statements make complicated if/else statements easier to read and achieve the same result.
5) The ternary operator (?) and a colon (:) allow us to refactor simple if/else statements.
6) Comparison operators, including <, >, <=, and >= can compare two variables or values.
7) After two values are compared, the conditional statement evaluates to true or false.
8) The logical operator && checks if both sides of a condition are truthy.
9) The logical operator || checks if either side is truthy.
10) The logical operator !== checks if the two sides are not equal.
11) An exclamation mark (!) switches the truthiness / falsiness of the value of a variable.
12) One equals symbol (=) is used to assign a value to a variable.
13) Three equals symbols (===) are used to check if two variables are equal to each other.*/
