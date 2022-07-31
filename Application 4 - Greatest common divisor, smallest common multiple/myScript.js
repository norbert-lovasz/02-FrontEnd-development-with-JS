document.getElementById("divizorComun").addEventListener("click", divCom);

document.getElementById("multipluComun").addEventListener("click", mulCom);

function divCom() {
	// alert("divCom has been called");

	let a = document.getElementById("numberA").value;
	let b = document.getElementById("numberB").value;


	let rez = commonDiv(a, b).toString(); 

	document.getElementById("afisareRezultat").innerHTML =
		"The greatest common divisor of " + a.bold() + " and " + b.bold() + " is " + rez.bold() + ".";
}

function commonDiv(a, b) {
	if (a == 0) return b;

	while (b != 0) {
		if (a > b) {
			a = a - b;
		} else b = b - a;
	}

	return a;
}

function mulCom() {
	// alert("divCom has been called");

	let a = document.getElementById("numberA").value;
	let b = document.getElementById("numberB").value;
	

	let rezult = commonMul(a, b).toString();

	document.getElementById("afisareRezultat").innerHTML =
		"The smallest common multiple of " +
		a.bold() +
		" and " +
		b.bold() +
		" is " +
		rezult.bold() +
		".";
}

function commonMul(a, b) {
	rez = (a * b) / commonDiv(a, b);

	return rez;
}

