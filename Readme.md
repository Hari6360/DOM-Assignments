# Dom Assignment 2.0

## First Assignment

### Task 1

```js

let list = document.createElement("li");
list.textContent = "Hire Me";
let task = document.querySelector("ul");
task.append(list);

//Changing Contact into Project

let list1 = document.querySelector("header nav ul li:nth-child(3)");
list1.innerText = "Projects";

// Removing Social Media Icons

let icons = document.querySelector("footer ul");
icons.style.display = "none";
```

### Task 2

```js
// Changing placeholder in search

let placeHolder = document.querySelector("header .search-field input");
placeHolder.placeholder = "Search My Project";

// //Changing Contact into Project

let list1 = document.querySelector("header nav ul li:nth-child(3)");
list1.innerText = "Projects";

let icons = document.querySelector("footer ul");
icons.style.display = "none";


```

### Task 3

```js
// //Changing Contact into Project

let list1 = document.querySelector("header nav ul li:nth-child(3)");
list1.innerText = "Projects";

// changed Left side hero section content

let herosec1 = document.querySelector(
	".hero-section .hero-left-section p span:nth-child(3)"
);
herosec1.innerText = "an Employee";

let herosec2 = document.querySelector(
	" .hero-section .hero-left-section p span:nth-child(5)"
);
herosec2.innerText = "iNeuron Intelligence Pvt Ltd";

```
