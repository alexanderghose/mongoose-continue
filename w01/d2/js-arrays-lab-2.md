<img src="https://i.imgur.com/sA6iEbw.jpg">

# JavaScript Looping over Arrays Lab

## Introduction

This lab provides an opportunity to practice looping over arrays.

> **Note:** Feel free to reference the arrays lesson, collaborate, google, etc.

## Setup & Instructions

Create a new HTML/CSS/JS repl on [repl.it](https://repl.it) for these exercises.

Title your repl **JS Looping over Arrays Lab**.

Copy the exercises below into the repl's **script.js** file and code away!

This lab is **a DELIVERABLE**. When completed, submit the link to your repl to your instructors.

## Exercise

```
/*
Exercise 10:
  - Declare a new array called "foods" that contains an array of strings, and you get to decide whether to include the word soup.
  - Task: Assign a boolean to a variable named hasSoup depending upon whether or not the foods array includes the string 'soup'.
*/

// Complete Exercise 10 below...



console.log('Exercise 10 Result:\n', hasSoup);

/*
Exercise 11:
  - Use a 'for of' or 'foreach' loop to iterate through the provided nums array and add each odd number to a new array named odds.
  - Hint: Initialize the odds variable to an empty array before the iteration.
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

// Complete Exercise 11 below...



console.log('Exercise 11 Result:\n', odds);

/*
Exercise 12:
  - Use a 'for of' or forEach loop to iterate through the same nums array and add the number to arrays named fizz, buzz and/or fizzbuzz based upon the following:
  	- Add to the fizz array if the number is evenly divisible by 3.
  	- Add to the buzz array if the number is evenly divisible by 5.
  	- Add to the fizzbuzz array if the number is evenly divisible by 3 & 5.
*/

// Complete Exercise 12 below...



console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

/*
Exercise 13:
  - Given the below numArrays array of arrays (two-dimensional array), assign the last nested array to a variable named numList.
  - For an extra challenge, assume you don't know how many nested arrays numArrays contains.
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

// Complete Exercise 13 below...



console.log('Exercise 13 Result:\n', numList);

/*
Exercise 14:
  - Given the above numArrays array, access the number 66 and assign to a variable named num.
*/

// Complete Exercise 14 below...



console.log('Exercise 14 Result:\n', num);

/*
Exercise 15:
  - Given the above numArrays array, use nested forEach or 'for of' methods to sum up all the numbers contained within numArrays and assign to a variable named total.
  - Hint: Be sure to declare and initialize the total variable before the iterations.
*/

// Complete Exercise 15 below...



console.log('Exercise 15 Result:\n', total);
```


## Additional Resources

- [MDN Arrays](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
