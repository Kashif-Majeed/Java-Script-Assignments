// *****  ASSIGNMENTS  CHAPTER 9-11 ********

// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”

// ANSWER 1:

// var cityName = prompt("Enter City Name");
// if (cityName === "Karachi") {
// console.log("Welcome to Cit of Lights!");
// }

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the 
// user is female, give the message: Good Morning Ma’am.


// ANSWER 2:

// var gender = prompt("Enter Gender!");
// var gender2 = gender.toLowerCase()
// if (gender2 === "male"){
//     alert("Good Morning Sir");
// }
// else if (gender2 === "female"){
//     alert("Good Morning Ma'am");
// }
// else  {
//     alert ("Wrong Input");
// }

// 3. Write a program to take input color of road traffic signal from the user & show the message 
// according to this table:

// Signal color          Message
// Red                 Must Stop
// Yellow              Ready to move
// Green               Move now

//   ANSWER 3:

// var trafficSignal = prompt("Road Traffic Signal");
// var trafficSignal2 = trafficSignal.toLocaleLowerCase()
// if (trafficSignal2 === "red"){
//     alert("Must Stop!");
// }
// else if (trafficSignal2 === "yellow"){
//     alert("Ready to Move");
// }
// else if (trafficSignal2 === "green"){
//     alert("Move Now");
// }
// else {
//     alert("Wrong Input");
// }

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is 
// less than 0.25litres, show the message “Please refill the fuel in your car".

//  ANSWER 4:

// var remainingFuel = prompt("Remaining Fuel Limit in Litres");
// if (remainingFuel < 0.25){
// alert("Please refill the fuel in your car");
// }


// 5. Run this script, & check whether alert message would be displayed or not. Record the outputs.

//   ANSWER 5:

// a.
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");  // displaying due to true value
// }

// b.
// var b = 82; 
// if (b++ === 83){
// alert("given condition for variable b is true");   //not displaying due to false value
// }

// // c.
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");   // displaying condition is false
// }
// if (c === 13){
// alert("condition 2 is true");  // displaying condition is true
// }
// if (++c < 14){
// alert("condition 3 is true");   // displaying condition is false
// }
// if(c === 14){
// alert("condition 4 is true");   // displaying condition is true
// } 

// // d. 
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");               // displaying condition   
// }

// // e. 
// if (true){
// alert("True");               // displaying condition is true
// }
// if (false){
// alert("False");               // displaying condition is true
// }

// f. 
// if("car" < "cat"){
//     alert("car is smaller than cat");    // displaying condition is true  
// }

// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute 
// & show the resulting percentage on your page. Take percentage & compute grade as per following table:
//     percentage                   Grade                 Remarks
// greater than or equal to 80       A-one               Excellent
// greater than or equal to 70         A                    Good  
// greater than or equal to 60         B                   Need Improve
// less than 60                        Fail                    Sorry

// Show the total marks, marks obtained, percentage, grade & remarks like

//   ANSWER 6:

// var totMarks = 300
// var marksObtained = 170
// var percentage = (marksObtained / totMarks) * 100
// if (percentage >= 80){
//     alert("TOTAL MARKS: " + totMarks + "  " + "Marks Obtained: " + marksObtained + "  " + "PERCENTAGE: "+ percentage + "%" + "  " + "GRADE: A-ONE, 'EXCELLENT'")
// }
// else if (percentage >= 70){
//     alert("TOTAL MARKS: " + totMarks + "  " + "Marks Obtained: " + marksObtained + "  " + "PERCENTAGE: "+ percentage + "%" + "  " +  "GRADE: A, 'GOOD'")
// }
// else if (percentage >= 60){
//     alert("TOTAL MARKS: " + totMarks + "  " + "Marks Obtained: " + marksObtained + "  " + "PERCENTAGE: "+ percentage + "%" + "  " + "GRADE: B, 'NEED IMPROVEMENT'")
// }
// else if (percentage < 60){
//     alert("TOTAL MARKS: " + totMarks + "  " + "Marks Obtained: " + marksObtained + "  " + "PERCENTAGE: "+ percentage + "%" + "  " +  "GRADE: FAIL, 'SORRY'" )
// } 
// else {
//     alert("WRONG INPUT")
// }



// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.

//   ANSWER 7:

// var num = Math.random();
// var num2 = (num * 10) + 1;
// var randomNum = Math.floor(num2); // 1 to 10

// console.log(randomNum);

// var ranNum = prompt("Enter Number b/w 1 - 10");
// var ranNum2 = Number(ranNum)
// if (randomNum === ranNum2){
//     alert("Bingo! Correct answer");
// }
// else if (randomNum === ranNum2 - 1){
//     alert("Close enough to the correct answer");
// }
// else{
//     alert("Wrong Number");
// }



// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user
// if the number is divisible by 3.

//   ANSWER 8:

// var checkNum = prompt("Input values");
// var divisibleNum = (checkNum % 3);

// console.log(divisibleNum);

// if(divisibleNum == 0){
//     alert("CORRECT INPUT");
// }
// else {
//     alert("WRONG INPUT");
// } 



// 9. Write a program that checks whether the given input is an even number or an odd number.

//    ANSWER 9:

// var inputValue = prompt("Input Values");
// var checkNum = (inputValue % 2);

// if (checkNum == 0){
//     alert("EVEN NUMBERS");
// }
// else {
//     alert("ODD NUMBERS");
// }



// 10. Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

//   ANSWER 10:

// var temp = prompt("ENTER TODAY'S TEMPERATURE");

// if (temp >= 40){
//     alert("It is too hot outside.");
// }
// else if (temp >= 30 && temp < 40){
//     alert("The Weather today is Normal.");
// }
// else if (temp >= 20 && temp < 30){
//     alert("Today’s Weather is cool.");
// }
// else if (temp >= 10 && temp < 20){
//     alert("OMG! Today’s weather is so Cool.");
// }



// 11. Write a program to create a calculator for +,-,*, / & % Using if statements. 
// Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user

// ANSWER 11: (NOT DONE)

// var firstNum = prompt("ENTER FIRST NUMBER");
// var defaultOperator = "+ - * / %";
// var operator = prompt("ENTER OPERATOR", defaultOperator);
// var secondNum = prompt("ENTER SECOND NUMBER");
// var totalNum = (firstNum+operator+secondNum);

// alert(("First Number: " + firstNum) + ("Operators: " + operator) + ("Second Number: " + secondNum) + ("Total: " + totalNum));

// NOT DONE


