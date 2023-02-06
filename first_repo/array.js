// var car1 = "Seat";
// var car2 = "BMW";
// var car3 = "Ferrari";
// La forma antigua de crear array, ya no se utiliza
// var cars2 = new Array('Seat', 'BMW', 'Ferrrari');

var cars = ["Seat", "BMW", "Ferrari"];

// console.log(cars);
//
// console.log(cars[0]);
// console.log(cars[1]);
// console.log(cars[2]);
//
// console.log(cars.length);
//
// console.log(cars[cars.length - 1]);

// for (let idx = 0; idx < cars.length; idx++) {
//   console.log(cars[idx]);
// }

// cars.forEach(mostrarElemento);
//
// function mostrarElemento(item, index) {
//   console.log('Mostrando marca de automovil: ' + item + ' en posición de array: ' + index);
// }

var colors = ["amarillo", "rojo", "verde"];

// console.log(colors);
// colors[3] = "verde";
// console.log(colors);

// colors[colors.length - 1] = "morado";
// colors.push("morado");
// console.log(colors);

colors.splice(2, 1, 'marron');
console.log(colors);
