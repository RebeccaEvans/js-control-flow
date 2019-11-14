pluralizer.js

/*Write a program that starts like...

var thing = 'cat';
var count = 5;
and outputs the pluralized form of the word, depending on what count is. For example, "5 cats" or "1 dog". Change thing to different values to test your code!

Requirements

Your program should pluralize the word based on an integer (count)*/

var thing = 'horse';
var count = Math.round(Math.random() * 10)

if (count > 1) {
	console.log(count, thing + "s" )
}
else {
	console.log(count, thing)
}
