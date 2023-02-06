// LET y CONST

// var a = 5;
// var b = 10;
//
// if (a === 5) {
//   let a = 4; // el alcancce es dentro del bloque if
//   let b = 1; // el alcance es global
//
//   console.log("a dentro de bloque", a);
//   console.log("b dentro de bloque", b);
// }
// console.log("a dentro de bloque", a);
// console.log("b dentro de bloque", b);
//
// // CONST
//
// var x = 10;
//
// {
//   const x = 2;
//   // aqui 2
//   console.log(x);
// }
// console.log(x);


// ARROW FUNCTIONS Funciones flecha =>

// function hola() {
//   return "hola mundo";
// }
//
// console.log(hola());
//
// hola = function() {
//   return "hola mundo";
// }
//
// console.log(hola());
//
// hola = () => {
//   return "hola mundo flecha";
// }
//
// console.log(hola());
//
// hola = () => "Hola Mundo flecha 2";
// console.log(hola());
//
// hola = (nombre) => "hola " + nombre;
// console.log(hola("terricola"));
//
// hola = nombre => "hola " + nombre;
// console.log(hola("terricola"));
//
// hola = (nombre, nombre2) => "Hola " + nombre + nombre2;
// console.log(hola("pira", "mide"));


const words = ["Hola", "MunDo", "PruEba"];

// como funcion de callback funciona bien las arrow functions
const downcasedWords = words.map(word => word.toLocaleLowerCase());
console.log(downcasedWords)

// TEMPLATES LITERALS

let nombre = "Juan";
console.log("Hola mi nombre es " + nombre);
console.log(`Hola mi nombre es ${nombre}`);

let precio = 2;
let impuesto = 1.5;
let total = `El precio total es ${precio * impuesto}`;

console.log(total);

let multistring = "esto es un texto \nen dos líneas";
console.log(multistring);

let multilinea = `Esto es un texto 
en dos líneas`;
console.log(multilinea);

