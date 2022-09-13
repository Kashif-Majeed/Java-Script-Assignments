//                       JavaScript Programming Assignment 3

// 1. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//  BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

// ANSWER 1:

// let qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "Ph.D"];
//         document.write("Qualifications:" +"<br>");
// for (var i = 0; i < qualification.length; i++) {
//         document.write((i+1)+") " + qualification[i] + "<br>");
// }

// 2. Write a program to store 3 student names in an array.Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display the scores & percentages of students like:

// Answer 2:

// let students = ["Aamir", "Asim", "Arif"];
// let scores = [320, 230, 480];
// let percentages = [scores[0]/500*100, scores[1]/500*100, scores[2]/500*100];

// for (var i=0; i < students.length; i++) {
//     console.log("Score of "+ students[i] +" "+ "is "+ scores[i]+". "+ "Percentage: "+percentages[i]+"%");
// }




// 3. Initialize an array with color names. Display the array elements in your browser.



// A. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// Answer 3A:

// let colorNames = ["Red", "Yellow", "Green", "Black", "White"];

// for (var i=0; i < colorNames.length; i++) {
//         document.write("*"+colorNames[i] + "<br>");
// }

// // B. Ask the user what color he/she wants to add to the end & add that color to the end of the array. 
// // Display the updated array in your browser.

// colorNames.push("Purple");
// document.write(colorNames);

// // C. Add two more color to the beginning of the array. Display the updated array in your browser.
// colorNames.unshift("Blue", "Pink");


// // D. Delete the first color in the array. Display the updated array in your browser.
// colorNames.shift();


// // E. Delete the last color in the array. Display the updated array in your browser.
// colorNames.pop();


// F. Ask the user at which index he/she wants to add a color & color name.
// Then add the color to desired position/index. Display the updated array in your browser.

// let colorNames = ["Red", "Yellow", "Green", "Black", "White"];
// var inputIndex = prompt("Enter Index Number");
// var inputIndex1 = Number(inputIndex);
// var inputColor = prompt("Enter Color Name");

// colorNames.splice(inputIndex1,0,inputColor);
// document.write(colorNames);



// G. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete.
//  Then remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.


// let colorNames = ["Red", "Yellow", "Green", "Black", "White"];
// var inputIndex = prompt("Enter Index Number to Delete");
// var inputIndex1 = Number(inputIndex);
// var inputColor = prompt("Enter How Many Colors to be DELETED");
// var inputColor1 = Number(inputColor);

// colorNames.splice(inputIndex1,inputColor1);
// document.write(colorNames);



// 4. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selected cities array.

// let cityNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar", ];
// let cities = cityNames.splice(2,2);

// console.log(cities);



// 5. Write a JavaScript program to remove all duplicate items from an array Sample array : 
// var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : [3, ‘a’, 2, 4, 9]

//   ANSWER 5:

// const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// var unique = arr1.filter((v, i, a) => a.indexOf(v) === i);

// console.log(unique);



// 6. We have the following arrays:
// var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
// var o = ["th","st","nd","rd"];
// Write a JavaScript program to display in the following way :
// 1st choice is Karachi
// 2nd choice is Lahore
// 3rd choice is Islamabad

// var cities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
// var o = ["th","st","nd","rd"];


// for (var i = 1; i < cities.length; i++) {
//         console.log((i)+o[i]+" "+"choice is" + " " +cities[i-1]);
//     }
 


// 7. Wri]te a JavaScript program to compute the union o]f two arrays. (Merge two
// arrays by removing all duplicates)
// var a = [10,20,4,40,60,70]
// var b = [1,2,3,4,5,6,7,8,9,10]
// Output should be:
// [1,2,3,4,5,6,7,8,9,10,20,40,60,70]


//   ANSWER 7:

// var a = [10,20,4,40,60,70];
// var b = [1,2,3,4,5,6,7,8,9,10];

// var c = a.concat(b);

// var unique = c.filter((v, i, a) => a.indexOf(v) === i);
// unique.sort(function(a, b){return a-b});
// console.log(unique);




// 8. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// ANSWER 8(a):

// for (var i=1; i <= 15; i++){
//     document.write(i+", ");
// }

// ANSWER 8(b):

// document.write("REVERSE COUNTING: ");
// for (var i = 10; i >= 1; i--){
//     document.write(i+", ");
// }

// ANSWER 8(c):

// document.write("EVEN COUNTING: ");
// for (var i = 0; i <= 20; i+=2) {
//     document.write(i+", "); 
// }

// ANSWER 8(d):

// document.write("ODD COUNTING: ");
// for (var i = 1; i <= 19; i+=2) {
//     document.write(i+", "); 
// }

// ANSWER 8(e):

// document.write("SERIES: ");
// for (var i = 2; i <= 20; i+=2) {
//     document.write(i+"k, "); 
// }