# Dom Assignment 2.0

## First Assignment

### Task 1

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
