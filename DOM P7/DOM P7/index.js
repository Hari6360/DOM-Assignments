let removeLanuages = Array.from(
	document.querySelectorAll(".main__languages  a")
);
removeLanuages.forEach((language) => {
	if (language.innerText.includes("2.0")) {
		language.style.display = "none";
	}
});

let inputfield = document.querySelector(".main__form-input");
inputfield.disabled = false;

let submitbtn = document.querySelector(".main__form-btn");
submitbtn.disabled = false;
