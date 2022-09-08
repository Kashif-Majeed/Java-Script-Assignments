//                       JavaScript Programming Assignment 3

// 1. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//  BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

// ANSWER 1:

// let qualification = ["1) SSC", "2) HSC", "3) BCS", "4) BS", "5) BCOM", "6) MS", "7) M. Phil", "8) PhD"];
// document.write("Qualifications:" + qualification);


// 2. Write a program to store 3 student names in an array.Take another array to store score of these three students.
// Assume that total marks are 500 for each student, display the scores & percentages of students like:

// Answer 2:

// let students = ["Aamir", "Asim", "Arif"];
// let scores = [320, 230, 480];
// let percentages = [scores[0]/500*100, scores[1]/500*100, scores[2]/500*100];

// console.log("Score of "+ students[0] +" "+ "is "+ scores[0]+". "+ "Percentage: "+percentages[0]+"%");
// console.log("Score of "+ students[1] +" "+ "is "+ scores[1]+". "+ "Percentage: "+percentages[1]+"%");
// console.log("Score of "+ students[2] +" "+ "is "+ scores[2]+". "+ "Percentage: "+percentages[2]+"%");


// 3. Initialize an array with color names. Display the array elements in your browser.

//    ANSWER 3:

// let colorNames = ["Red", "Yellow", "Green", "Black", "White"];
// document.write(colorNames);


// A. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
// Display the updated array in your browser.

// Answer 3A:

// var inputColor = prompt("PLEASE ENTER COLOR NAME");

// colorNames.unshift(inputColor);
// document.write(colorNames);

// B. Ask the user what color he/she wants to add to the end & add that color to the end of the array. 
// Display the updated array in your browser.

// Answer 3B:

// colorNames.push("Purple");
// document.write(colorNames);

// C. Add two more color to the beginning of the array. Display the updated array in your browser.

// Answer 3C:

// colorNames.unshift("Blue", "Pink");
// document.write(colorNames);

// D. Delete the first color in the array. Display the updated array in your browser.

// Answer 3D:

// colorNames.shift();
// document.write(colorNames);

// E. Delete the last color in the array. Display the updated array in your browser.

// Answer 3E:

// colorNames.pop();
// document.write(colorNames);

// F. Ask the user at which index he/she wants to add a color & color name.
// Then add the color to desired position/index. Display the updated array in your browser.

// Answer 3F:

// let colorNames = ["Red", "Yellow", "Green", "Black", "White"];
// var inputIndex = prompt("Enter Index Number");
// var inputIndex1 = Number(inputIndex);
// var inputColor = prompt("Enter Color Name");

// colorNames.splice(inputIndex1,0,inputColor);
// document.write(colorNames);


// G. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete.
//  Then remove the same number of color(s) from user-defined position/index.
//  Display the updated array in your browser.

// Answer 3G:

// let colorNames = ["Red", "Yellow", "Green", "Black", "White"];
// var inputIndex = prompt("Enter Index Number to Delete");
// var inputIndex1 = Number(inputIndex);
// var inputColor = prompt("Enter How Many Colors to be DELETED");
// var inputColor1 = Number(inputColor);

// colorNames.splice(inputIndex1,inputColor1);
// document.write(colorNames);


// 4. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selected cities array.


//    ANSWER 4:

// let cityNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// let cities = cityNames.splice(2,2);
// console.log(cities);





// 5. Write a JavaScript program to remove all duplicate items from an array Sample array : 
// var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : [3, ‘a’, 2, 4, 9]

//   ANSWER 5:

// var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// var arr2 = arr1.filter((v,i,a) => a.indexOf(v) === i);
// document.write(arr2);



// 6. We have the following arrays:
// var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
// var o = ["th","st","nd","rd"];
// Write a JavaScript program to display in the following way :
// 1st choice is Karachi
// 2nd choice is Lahore
// 3rd choice is Islamabad

//   ANSWER 6:

// aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
// var o = ["th","st","nd","rd"];

// console.log("1"+o[1]+" "+ "choice is "+ " "+aCities[0]);
// console.log("2"+o[2]+" "+ "choice is "+ " "+aCities[1]);
// console.log("3"+o[3]+" "+ "choice is "+ " "+aCities[2]);



// 7. Write a JavaScript program to compute the union of two arrays. (Merge two
// arrays by removing all duplicates)
// var a = [10,20,4,40,60,70]
// var b = [1,2,3,4,5,6,7,8,9,10]
// Output should be:
// [1,2,3,4,5,6,7,8,9,10,20,40,60,70]

//   ANSWER 7:

// var a = [10,20,4,40,60,70]
// var b = [1,2,3,4,5,6,7,8,9,10]

// var c = a.concat(b);

// var unique = c.filter((v,i,a) => a.indexOf(v) === i);
// unique.sort(function(a,b){return a-b});

// console.log(unique);



// 8. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


// ANSWER 8:

// var counting =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// document.write("COUNTING: "+ counting);



// var reverse = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// document.write("REVERSE COUNTING: "+ reverse);


// var even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// document.write("EVEN: "+ even);

// var odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// document.write("ODD: "+ odd);


// var series = ["2k", "4k", "6k", "8k", "10k", "12k", "14k", "16k", "18k", "20k"];
// document.write("SERIES: "+ series);