// select elements
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var body = document.getElementById("gradient");
var button = document.querySelector(".colorR");

// set linear background with current color
function setGradient() {
	body.style.background = "linear-gradient(to right," 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";
	h3.textContent = body.style.background + ";";
}

// generate random color for color1
function getRandomColor1() {
	var letters = "0123456789abcdef";
	var color = "#"; 
	for(var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random()*16)];
	}
	// set input color1 to random color
	color1.value = color;
	return color;
}

// generate random color for color2
function getRandomColor2() {
	var letters = "0123456789abcdef";
	var color = "#"; 
	for(var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random()*16)];
	} 
	// set input color2 to random color
	color2.value = color;
	return color;
}

function setRandomGradient() {
	var r1 = getRandomColor1();
	var r2 = getRandomColor2();
	body.style.background = "linear-gradient(to right," + r1 + "," + r2 + ")";
	h3.textContent = body.style.background + ";";
}

setGradient();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomGradient);

