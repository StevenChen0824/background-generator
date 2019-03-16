var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");
var button = document.querySelector(".colorR");

function setgradient() {
	body.style.background = "linear-gradient(to right," 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}

function getRandomColor1() {
	var letters = "0123456789abcdef";
	var color = "#"; 
	for(var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random()*16)];
	} 
	return color;
}

function getRandomColor2() {
	var letters = "0123456789abcdef";
	var color = "#"; 
	for(var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random()*16)];
	} 
	return color;
}

function setRandomGradient() {
	var r1 = getRandomColor1();
	var r2 = getRandomColor2();
	body.style.background = "linear-gradient(to right," + r1 + "," + r2 + ")";
	css.textContent = body.style.background + ";";
}

setgradient();

color1.addEventListener("input", setgradient);

color2.addEventListener("input", setgradient);

button.addEventListener("click", setRandomGradient);

