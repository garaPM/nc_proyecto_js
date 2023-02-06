// var coche = "Seat";


// var coche = {
//   type: "Seat",
//   model: "Leon",
//   color: "red"
// }
//
// console.log(coche);
// console.log(coche.model);
// console.log(coche["color"]);

// Clase

// class Car {
//   // método constructor
//   constructor(brand) {
//     this.type = brand;
//   }
// }
//
//
// var carFake = new Car("Tesla");
//
// console.log(carFake);

// class Persona {
//   constructor(nombre, age) {
//     this.nombre = nombre;
//     this.age = age;
//   }
//
//   saludar() {
//     return "Hola " + this.nombre;
//   }
//
//   // metodo estatico
//   static edad(persona) {
//     return persona.nombre + " tiene una edad de: " + persona.age + " años";
//     // return this.nombre + " tiene " + this.age + " años"
//   }
//
//   coche(marca) {
//     return this.nombre + " tiene un coche marca " + marca;
//   }
// }
//
// var maria = new Persona("Maria", 48);
//
// // console.log(maria.edad());
// // console.log(maria.coche("Ferrari"));
// console.log(Persona.edad(maria))


// Herencia

// class Car {
//   // método constructor
//   constructor(brand) {
//     this.carname = brand;
//   }
//   present() {
//     return "Tengo un " + this.carname;
//   }
// }
//
// class Model extends Car {
//   constructor(brand, mod) {
//     super(brand);
//     this.model = mod;
//   }
//   show() {
//     return this.present() + ", esto es un " + this.model;
//   }
// }
//
// var mycar = new Model("Fiat", "500");
//
// console.log(mycar);
// console.log(mycar.present());
// console.log(mycar.carname);
// console.log(mycar.show());


// Get y Set
// class Car {
//   // método constructor
//   constructor(brand) {
//     this._carname = brand;
//   }
//   // no se puede colocar el mismo nombre que la propiedad al metodo
//   get cnam() {
//     return this._carname;
//   }
//
//   set cnam(x) {
//     this._carname = x;
//   }
// }
//
// var mycar = new Car("Ford");
//
// console.log(mycar.cnam);
//
// mycar.cnam = "Test";
//
// console.log(mycar.cnam);

// Hoisting


console.log(hola());

function hola() {
  return "Hola";
}

// es una mala practica declarar o instanciar sin haber creado el objeto, en el caso de la clase mostrar un error
var mycar = new Car("Hoisting");

class Car {
  constructor(brand) {
    this._carname = brand;
  }
}

// var mycar = new Car("Ford");
