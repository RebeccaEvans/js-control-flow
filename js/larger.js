
/*
Write a program that reads two Number variables and prints which one is greater. (e.g. "The larger number of 7 and 3 is 7")

Requirements

Your program should maintain two variables
It should correctly identify which is larger and print that result*/

var num1 = Math.round(Math.random() * 10)
var num2 = Math.round(Math.random() * 10)

if (num1 > num2) {
  console.log("The larger number of", num1, "and", num2, "is", num1)
}
else {
  console.log("The larger number of", num1, "and", num2, "is", num2)
}