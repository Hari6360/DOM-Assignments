# _DOM Assignment - 1_

___
###  Final Output_ :

![Output Image](./DOM%20Assignment%202.0%201%2C2%2C3/firstAssignmentImage/task4Output.png)

## _Task 1_:

### **Solution :**
```JavaScript
//added Hire Me in Navbar

let list = document.createElement("li");
list.textContent = "Hire Me";
let task = document.querySelector("ul");
task.append(list);

//Changing Contact into Project

let list1 = document.querySelector("header nav ul li:nth-child(3)");
list1.innerText = "Projects";

//  Removing Social Media Icons

let icons = document.querySelector("footer ul");
icons.style.display = "none";

```



## _Task 2_:

### **Solution :**
```JavaScript
//Changing placeholder in search

let placeHolder = document.querySelector("header .search-field input");
placeHolder.placeholder = "Search My Project";

// //Changing Contact into Project

let list1 = document.querySelector("header nav ul li:nth-child(3)");
list1.innerText = "Projects";

let icons = document.querySelector("footer ul");
icons.style.display = "none";

```


## _Task 3_:

### **Solution :**
```JavaScript
// //Changing Contact into Project

let list1 = document.querySelector("header nav ul li:nth-child(3)");
list1.innerText = "Projects";

// Changed left side hero section content

let herosec1 = document.querySelector(
	".hero-section .hero-left-section p span:nth-child(3)"
);
herosec1.innerText = "an Employee";

let herosec2 = document.querySelector(
	" .hero-section .hero-left-section p span:nth-child(5)"
);
herosec2.innerText = "iNeuron Intelligence Pvt Ltd";
```


## _Task 4_:

### **Solution :**
```JavaScript
// Added Author Pic

let avtar = document.querySelector(".hero-right-section img");
avtar.src =
	"https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";
```

## _Task 5_:

### **Solution :**
```JavaScript

Changing Contact into Project

let list1 = document.querySelector("header nav ul li:nth-child(3)");
list1.innerText = "Projects";

// Changed Content in left side hero section

let herosec1 = document.querySelector(
	".hero-section .hero-left-section p span:nth-child(3)"
);
herosec1.innerText = "an Employee";

let herosec2 = document.querySelector(
	" .hero-section .hero-left-section p span:nth-child(5)"
);
herosec2.innerText = "iNeuron Intelligence Pvt Ltd";

// added button in right section

let btn = document.createElement("button");
btn.innerText = "Support Me";

let SupportMe = document.querySelector(".hero-right-section-btns");
SupportMe.append(btn);
```
---



# _DOM Assignment - 2_

___
###  Final Output_ :

![Output Image](./DOM%20Assignment%202.0%201%2C2%2C3/secondAssignmentImage/task2Output.png)


## _Task 1_:

### **Solution :**
```JavaScript
//Changing Contact into Project

let list1 = document.querySelector("header nav ul li:nth-child(3)");
list1.innerText = "Projects";

//Changing h3 tag color

let h3color = document.querySelectorAll(".accordian h3");
for (let i = 0; i < h3color.length; i++) {
	h3color[i].style.background = "#dadaf8";
}
```


## _Task 2_:

### **Solution :**
```JavaScript
oldaccordian = document.querySelector(".accordian-wrapper");
let newaccordian = document.createElement("div");
newaccordian.className = "accordian";
let h3 = document.createElement("h3");
let p = document.createElement("p");
h3.innerText = "Skills";
p.innerText =
	"I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over GitHub";

newaccordian.appendChild(h3);
newaccordian.appendChild(p);
p.style.display = "flex";
oldaccordian.appendChild(newaccordian);

let h3color = document.querySelectorAll(".accordian h3");
for (let i = 0; i < h3color.length; i++) {
	h3color[i].style.background = "#dadaf8";
}

```


----

# _DOM Assignment - 3_

___
###  Final Output_ :

![Output Image](./DOM%20Assignment%202.0%201%2C2%2C3/thirdAssignmentImage/task1Output.png)

## _Task 1_:

### **Solution :**
```JavaScript
let ph1 = document.querySelector(".enterName");
ph1.placeholder = "FSJS 2.0";

let ph2 = document.querySelector(".userName");
ph2.placeholder = "FSJS 2.0";

let ph3 = document.querySelector(".enterMail");
ph3.placeholder = "fsjs@ineuron.ai";

let ph4 = document.querySelector(".userEmail");
ph4.placeholder = "fsjs@ineuron.ai";

let ph5 = document.querySelector(".enterMessage");
ph5.placeholder = "Hello World";

let ph6 = document.querySelector(".userMessage");
ph6.placeholder = "Hello World";
```




----

# _DOM Assignment - 4_

___
###  Final Output_ :

![Output Image](./04_DOM%20Project/04_DOM%20Project/Output/DOM%20P1%20SS.png)

## _Task 1_:

### **Solution :**
```JavaScript
let barbarian = document.querySelector(".clash-card__unit-stats--barbarian");
barbarian.style.background = "#ec9b3b";
barbarian.style.color = "#ffff";

let archer = document.querySelector(".clash-card__unit-stats--archer");
archer.style.background = "#ee5487";
archer.style.color = "#ffff";

let giant = document.querySelector(".clash-card__unit-stats--giant");
giant.style.background = "#f6901a";
giant.style.color = "#ffff";

let goblin = document.querySelector(".clash-card__unit-stats--goblin");
goblin.style.background = "#82bb30";
goblin.style.color = "#ffff";

let wizard = document.querySelector(".clash-card__unit-stats--wizard");
wizard.style.background = "#54adff";
wizard.style.color = "#ffff";

let statClass = document.querySelectorAll("div.stat,.stat-value");
for (let i = 0; i < statClass.length; i++) {
	statClass[i].style.color = "#ffff";
}


```


----

# _DOM Assignment - 5_

___
###  Final Output_ :

![Output Image](./05_DOM%20Project/05_DOM%20Project/Output/DOM%20P2%20SS.png)

## _Task 1_:

### **Solution :**
```JavaScript
// Pro Subscription Button

let btn = document.createElement("button");
btn.className = "btn";
btn.innerText = "Pro Subscription";
btn.style.backgroundColor = "blueViolet";
let a = document.createElement("a");
let div = document.querySelector(".nav-center");
div.append(btn);

//  Chinnese Tag in the left div

let china = document.querySelector(".tags-container > div");
let div1 = document.createElement("a");
div1.textContent = "Chinese(7)";
china.appendChild(div1);

// Dish Card

let card = document.querySelector(".recipe-gallery");
let recipeCard = document.createElement("div");
recipeCard.className = "card";
recipeCard.innerHTML = "<h1>Add 6th card here</h1>";
card.appendChild(recipeCard);


```

----

# _DOM Assignment - 6_

___
###  Final Output_ :

![Output Image](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-1.png)
![](./06_DOM%20Project/06_DOM%20Project/Output/DOM%20P3%20SS-2.png)


## _Task 1_:

### **Solution :**
```JavaScript
// Added LOGO

let logo = document.querySelector(".logo");
logo.src = "./assets/ineuron-logo.png";



```

## _Task 2_:

### **Solution :**
```JavaScript
//Added Price Tag

let price = document.querySelector(".app_price > span");
price.innerText = "$10";

```



----

# _DOM Assignment - 7_

___
###  Final Output_ :

![Output Image](./DOM%20P7/DOM%20P7/ass7.2-after.png)
![Output Image](./DOM%20P7/DOM%20P7/ass7.1-after.png)


## _Task 1_:

### **Solution :**
```JavaScript

let removeLanuages = Array.from(
	document.querySelectorAll(".main__languages  a")
);
removeLanuages.forEach((language) => {
	if (language.innerText.includes("2.0")) {
		language.style.display = "none";
	}
});
```

## _Task 2_:

### **Solution :**
```JavaScript

let inputfield = document.querySelector(".main__form-input");
inputfield.disabled = false;

let submitbtn = document.querySelector(".main__form-btn");
submitbtn.disabled = false;

```



----

# _DOM Assignment - 8_

___
### Final Output_ :


![Output Image](./DOM%20P8/DOM%20P8/ass8.3-after.png)

## _Task 1_:

### **Solution :**
```JavaScript


let side = document.querySelector(".new");
side.style.overflowY = "scroll";

```
## _Task 2_:

### **Solution :**
```JavaScript

let sec2 = document.body;
sec2.style.backgroundImage = "none";

```

## _Task 3_:

### **Solution :**
```JavaScript
const navbar = document.getElementsByClassName('collapse')[0];
navbar.style.display = "flex";


```


----

# _DOM Assignment - 9_

___
###  Final Output_ :

![Output Image](./DOM%20P9/DOM%20P9/ass9.2-before.png)

## _Task 1_:

### **Solution :**
```JavaScript

let tittle = document.querySelector(".caption .title");
tittle.style.color = "red";
```

## _Task 2_:

### **Solution :**

```JavaScript
let btn = document.querySelector(".add-to-cart");
btn.style.background = "red";


```

###        Coded by Hari Prasad
