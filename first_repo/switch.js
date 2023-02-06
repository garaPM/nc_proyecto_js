/*
 * 1.- Queremos que el usuario inserte un dato (se puede hacer con un prompt)
 * 2.- Filtrar diferentes caracteristicas
 * 3.- Pintar el resultado en consola
 */

var entrada = parseInt(prompt('Intoduzca un número para saber el día de la semana'));
var salida = null;

switch (entrada) {
  case 0:
    salida = "Lunes";
    break;
  case 1:
    salida = "Martes";
    break;
  case 2:
    salida = "Miercoles";
    break;
  case 3:
    salida = "Jueves";
    break;
  case 4:
    salida = "Viernes";
    break;
  case 5:
    salida = "Sabado";
    break;
  case 6:
    salida = "Domingo";
    break;

  default:
    salida = 'Debe introducir un número del 0-6';
    break;
}

console.log(salida);
