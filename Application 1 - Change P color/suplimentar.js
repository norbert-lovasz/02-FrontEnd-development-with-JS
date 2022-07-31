var culori = ["green", "red", "blue"];

function populareDropList() {
	// alert("populateDropList has been called");

	let content = document.getElementById("colors");

	for (var i = 0; i < culori.length; i++) {
		var option = document.createElement("option"); // introduc tag-ul option in html
		var txtNode = document.createTextNode(culori[i]); // creez un text node
		option.appendChild(txtNode); //Introduc text node in option
		content.insertBefore(option, colors.lastChild);
	}
}

function addNewColor() {
	// alert("addNewColor has been called");
	// alert("array inainte de push: "+culori)

	let duplicat = false;
	let newColor = document.getElementById("addColor").value;
	//alert("culoarea citita: "+newColor)

	if (isColor(newColor) == false) {
		alert("This is no standard color");
	} else {
		for (let elements of culori) {
			//alert ("elemtul i "+elements)

			if (elements.toLocaleLowerCase() === newColor.toLowerCase()) {
				duplicat = true;
				alert("culoare duplicata");
			}
		}

		if (duplicat == false) {
			culori.push(newColor.toLowerCase());

			//alert("array dupa push: "+culori)

			// aduagarea ultimului element din array -> codul din populare droplist fara partea cu 'for'. Executam instructiinile doar pentru ultimul element al array-ului
			let content = document.getElementById("colors");

			var option = document.createElement("option"); // introduc tag-ul option in html
			var txtNode = document.createTextNode(culori[culori.length - 1]); // introduc textul din array in html
			option.appendChild(txtNode);

			content.insertBefore(option, colors.lastChild);
		}
	}
}

function changeColor() {
	//alert("changeColor() has been called");

	var selectedOption = document.getElementById("colors").value;

	//alert("culoarea selectata: "+ selectedOption);

	var elements = document.getElementsByTagName("p"); // ne da un array care contine ca si fiecare element un paragraf

	for (var i = 0; i < elements.length; i++) {
		elements[i].style.color = selectedOption;
	}
}

// Verific daca culoarea introdusa chiar este o culoare standard, lista completa se gaseste pe internet nu am scris de mana :)
function isColor(newColor) {
	let check = false;

	for (standardColor of CSS_COLOR_NAMES) {
		if (newColor.toLowerCase() == standardColor.toLowerCase()) {
			check = true;
		}
	}
	return check;
}

const CSS_COLOR_NAMES = [
	"AliceBlue",
	"AntiqueWhite",
	"Aqua",
	"Aquamarine",
	"Azure",
	"Beige",
	"Bisque",
	"Black",
	"BlanchedAlmond",
	"Blue",
	"BlueViolet",
	"Brown",
	"BurlyWood",
	"CadetBlue",
	"Chartreuse",
	"Chocolate",
	"Coral",
	"CornflowerBlue",
	"Cornsilk",
	"Crimson",
	"Cyan",
	"DarkBlue",
	"DarkCyan",
	"DarkGoldenRod",
	"DarkGray",
	"DarkGrey",
	"DarkGreen",
	"DarkKhaki",
	"DarkMagenta",
	"DarkOliveGreen",
	"DarkOrange",
	"DarkOrchid",
	"DarkRed",
	"DarkSalmon",
	"DarkSeaGreen",
	"DarkSlateBlue",
	"DarkSlateGray",
	"DarkSlateGrey",
	"DarkTurquoise",
	"DarkViolet",
	"DeepPink",
	"DeepSkyBlue",
	"DimGray",
	"DimGrey",
	"DodgerBlue",
	"FireBrick",
	"FloralWhite",
	"ForestGreen",
	"Fuchsia",
	"Gainsboro",
	"GhostWhite",
	"Gold",
	"GoldenRod",
	"Gray",
	"Grey",
	"Green",
	"GreenYellow",
	"HoneyDew",
	"HotPink",
	"IndianRed",
	"Indigo",
	"Ivory",
	"Khaki",
	"Lavender",
	"LavenderBlush",
	"LawnGreen",
	"LemonChiffon",
	"LightBlue",
	"LightCoral",
	"LightCyan",
	"LightGoldenRodYellow",
	"LightGray",
	"LightGrey",
	"LightGreen",
	"LightPink",
	"LightSalmon",
	"LightSeaGreen",
	"LightSkyBlue",
	"LightSlateGray",
	"LightSlateGrey",
	"LightSteelBlue",
	"LightYellow",
	"Lime",
	"LimeGreen",
	"Linen",
	"Magenta",
	"Maroon",
	"MediumAquaMarine",
	"MediumBlue",
	"MediumOrchid",
	"MediumPurple",
	"MediumSeaGreen",
	"MediumSlateBlue",
	"MediumSpringGreen",
	"MediumTurquoise",
	"MediumVioletRed",
	"MidnightBlue",
	"MintCream",
	"MistyRose",
	"Moccasin",
	"NavajoWhite",
	"Navy",
	"OldLace",
	"Olive",
	"OliveDrab",
	"Orange",
	"OrangeRed",
	"Orchid",
	"PaleGoldenRod",
	"PaleGreen",
	"PaleTurquoise",
	"PaleVioletRed",
	"PapayaWhip",
	"PeachPuff",
	"Peru",
	"Pink",
	"Plum",
	"PowderBlue",
	"Purple",
	"RebeccaPurple",
	"Red",
	"RosyBrown",
	"RoyalBlue",
	"SaddleBrown",
	"Salmon",
	"SandyBrown",
	"SeaGreen",
	"SeaShell",
	"Sienna",
	"Silver",
	"SkyBlue",
	"SlateBlue",
	"SlateGray",
	"SlateGrey",
	"Snow",
	"SpringGreen",
	"SteelBlue",
	"Tan",
	"Teal",
	"Thistle",
	"Tomato",
	"Turquoise",
	"Violet",
	"Wheat",
	"White",
	"WhiteSmoke",
	"Yellow",
	"YellowGreen",
];
