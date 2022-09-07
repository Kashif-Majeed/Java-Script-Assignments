

// *****  ASSIGNMENT #  CHAPTER 12-13 *********//


// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a 
// number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).

// var input = prompt("ENTER CHARACTER (NUMBER OR STRING)");
// var input1 = Number(input);


// if (input1 >=65 && input1 <=90){
//     alert("UPPER CASE LETTERS")
// }
// else if (input >=97 && input1 <= 122){
//     alert("LOWER CASE LETTERS") 
// }
// else {
//     alert("NUMBERS");
// }





// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal.

//    ANSWER 2:

// var Num1 = prompt("ENTER VALUE 1");
// var Num2 = prompt("ENTER VALUE 2");

// var Number1 = Number(Num1);
// var Number2 = Number(Num2);

// if (Number1 >= Number2){
//     console.log(Number1);
// }
// else {
//     console.log(Number2);
// }


// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

//   ANSWER 3:

// var numberInput = prompt("PLEASE INPUT A NUMBER");
// var numberInput2 = Number(numberInput);

// if (numberInput2 > 0){
//     alert("POSITIVE NUMBER");
// }
// else if (numberInput2 < 0){
//     alert("NEGATIVE NUMBER");
// }
// else {
//     alert("ZERO VALUE");
// }



// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise


//    ANSWER 4:

//   THROUGH NESTED IF 

// var char = prompt("ENTER ONE CHARACTER");
// var char1 = char.toLowerCase()


// if (char1 === "a"){
//     alert("IT'S A VOWEL");
// }
// else if (char1 === "e"){
//     alert("IT'S A VOWEL");
// }
// else if (char1 === "i"){;
//     alert("IT'S A VOWEL");
// }
// else if (char1 === "o"){;
//     alert("IT'S A VOWEL");
// }
// else if (char1 === "u"){;
//     alert("IT'S A VOWEL");
// }
// else {
//     alert("FALSE VALUE");
// }


//   THROUGH LOGICAL OPERATOR "OR  ||":

// var char = prompt("ENTER ONE CHARACTER");
// var char1 = char.toLowerCase()


// if (char1 === "a" || char1 === "e" || char1 === "i" || char1 === "o" || char1 === "u"){
//     alert("IT'S A VOWEL");
// }
// else {
//     alert("FALSE VALUE");
// }


//   THROUGH SWITCH STATEMENT

// var char = prompt("ENTER ONE CHARACTER");
// var char1 = char.toLowerCase()

// switch (char1) {
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         console.log("It's a vowel");
//     break;
//     default:
//         console.log("False Value");



// 5. Write a program that 
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then give message “ Please enter your password”
// ii. Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”.
//  Show “Incorrect password” otherwise

//  ANSWER 5:

// var password1 = "Raju007$"
// var password = prompt("PLEASE ENTER A VALID PASSWORD");
// if (password === ""){
//     alert("PLEASE ENTER YOUR PASSWORD")
// }
// else if (password === password1){
//     alert("Correct! The password you entered matches the original password");
// }
// else{
//     alert("Incorrect password");
// }




// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

// ANSWER 6:

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else {
// greeting = "Good evening";
// }




// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the 
// following case using if, else & else if statements.

//    ANSWER 7:

// var time1 = prompt("Enter Time in 24 hrs format");
// var time2 = new date(time1);

// if (time2 >= 0000 && time2 < 1200){
//     alert("GOOD MORNING");
// }
// else if(time2 >= 1200 && time2 < 1700){
//     alert("GOOD AFTERNOON");
// }
// else if(time2 >= 1700 && time2 < 2100){
//     alert("GOOD EVENING");
// }
// else if(time2 >= 2100 && time2 < 2359){
//     alert("GOOD NIGHT");
// }



