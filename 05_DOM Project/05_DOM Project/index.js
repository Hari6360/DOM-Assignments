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
