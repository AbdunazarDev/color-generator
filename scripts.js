const hexOptions = ["A", "B", "C", "D", "E", "F", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const currentColor = document.getElementById("currentColor");
const getNewColor = document.getElementById("getNewColor");

getNewColor.addEventListener("click", setHex);

function getHex() {
	let color = "#";

	for (let i = 1; i <= 6; i++) {
		// color = color + hexOptions[i];
		color += hexOptions[getRandomNumber()];
		console.log(getRandomNumber);
		console.log(color);
	}

	return color
}

function getRandomNumber() {
	// console.log( Math.random() * 15);
	// console.log( Math.floor(Math.random() * hexOptions.length) );
	return Math.floor(Math.random() * hexOptions.length);
}
getHex ();

function setHex() {
	let color = getHex();
	currentColor.textContent = color;
	document.body.style.backgroundColor = color;
}

setHex();

