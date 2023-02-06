// var texto = "Jose";
//
// var textParaEnviar = JSON.stringify(texto);
//
// console.log(texto);
// console.log(textParaEnviar);
//
// var persona = { name: "Jose", age: 54 };
//
// var personaParaEnviar = JSON.stringify(persona);
//
// console.log(persona);
// console.log(personaParaEnviar)
//
// var personaRecibida = JSON.parse(personaParaEnviar)
//
// console.log(personaRecibida);


// Web Storage

var persona = { name: "Jose", age: 54 };

var personaParaEnviar = JSON.stringify(persona);

localStorage.setItem("persona", personaParaEnviar);

var personaDeLocalStorage = localStorage.getItem("persona");

var personaParseada = JSON.parse(personaDeLocalStorage);

document.getElementById("modificable").innerHTML = personaParseada.name;
document.getElementById("edad").innerHTML = personaParseada.age;


// Session storage

// sessionStorage.setItem("persona", personaParaEnviar);

var persona2 = { name: "Gonzalo", age: 29 };
var persona2ParaEnviar = JSON.stringify(persona2);

sessionStorage.setItem("persona", persona2ParaEnviar);

var personaDeSessionStorage = sessionStorage.getItem("persona");
var personaParseadaDeSessionStorage = JSON.parse(personaDeSessionStorage);

document.getElementById("modificable").innerHTML = personaParseadaDeSessionStorage.name;
document.getElementById("edad").innerHTML = personaParseadaDeSessionStorage.age;
