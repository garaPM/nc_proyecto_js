
/*
var edad = 16;

if (edad >= 18) {
	console.log("mayor de edad");
} else {
	console.log("Menor de edad");
}

var number = 0;

if (number == 0) {
	console.log("es un cero");
} else {
	console.log("no es un cero");
}

// comparacion estricta
if (number === "0") {
	console.log("es un cero");
} else {
	console.log("no es un cero");
}
*/

// Funciones

var edad = 16;

function calcularMayoriaEdad(parametro) {
	console.log("entra");
	if (parametro >= 18) {
		console.log("mayor de edad");
	} else {
		console.log("Menor de edad");
	}
}

calcularMayoriaEdad(edad);

function saludar() {
	return 'Hola';
}

saludar();
console.log(saludar());