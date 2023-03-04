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
