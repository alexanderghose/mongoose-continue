
<img src="https://i.imgur.com/DEsPVNw.png" height="400">

# Looping over Arrays

---

## Learning Objectives
<br>

Students will be able to:

- Iterate Over All of the Elements in an Array

---
## Roadmap
<br>
<p></p>

- Iterating Over the Elements


---
### Iterate Over All of the Elements in an Array
<br>

- Although a `for` loop can be used to iterate over an array, if you know you want to iterate over **all** of the elements in an array, the `forEach` method is a better approach:

	```js
	movies.forEach(function(movie) {
		console.log(movie);
	});
	```


- Try it out. As you can see, the `forEach` method calls the function provided as an argument **once for each element** in the array.

---
### Iterate Over All of the Elements in an Array
<br>
	
- You can also access the index of each iteration:

	```js
	movies.forEach(function(movie, idx) {
		console.log(idx + ') ' + movie);
	});
	```

- Note that it's a good practice to name the parameter that accepts each element as the singular of the array, or simply the first letter of the array variable (`movie` or `m` for the example above).

---
### Iterate Over All of the Elements in an Array
<br>

- ES2015 provides the `for...of` loop for iterating over the elements of arrays and other iterables such as strings:

	```js
	for(let movie of movies) {
		if (movie === 'The Last Airbender') break;
		console.log(movie);
	}
	``` 

- Unlike `forEach`, the `for...of` loop can be exited using the `break` statement.

---
### Essential Questions
<br>

- **In your own words, what's an array?**

- **What will be the value of the variable `color`:**

	```js
	const colors = ['red', 'green', 'blue'];
	let color = colors[1];
	```

- **What's the best method to use to iterate through an entire array?**

- **What method is used to copy a number of elements into a new array?**


---
### Further Study
<br>

- Because arrays are such a useful data structure, it's beneficial to developers to know what methods are available and what they do.

- Array iterator methods are extremely useful and we will cover them in a later lesson. Check [here](https://gist.github.com/jim-clark/843ebb5288d90da6b0dfd9eecd134b7c) for a preview.

- Other useful methods worth knowing about:
	- `indexOf` / `lastIndexOf`
	- `includes`
	- `reverse`
	- `sort`

---
### References
<br>

[MDN - JavaScript Arrays
](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

