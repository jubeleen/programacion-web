//Objetos y Arrays Definición de objetos ({ key: value })
//Los objetos en JavaScript almacenan información en pares clave-valor.

let persona = {
    nombre: "Juan",
    edad: 30,
    profesion: "Ingeniero"
};

//Podemos acceder a sus propiedades con notación de punto (obj.propiedad) 
// o notación de corchetes (obj["propiedad"]):

console.log(persona.nombre); // "Juan"
console.log(persona["edad"]); // 30

//Propiedades y métodos
//Las propiedades son valores dentro de un objeto, 
//mientras que los métodos son funciones dentro de un objeto.

let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    encender: function() {
        console.log("El auto está encendido");
    }
};

auto.encender(); // "El auto está encendido"

//Arrays y métodos
//Los arrays almacenan múltiples valores en una sola variable.

let numeros = [1, 2, 3, 4, 5];
console.log(numeros[0]); // 1

//Ejemplo práctico:

let nombres = ["Ana", "Luis", "Carlos", "Elena"];

let nombresConA = nombres.filter(nombre => nombre.includes("a"));
console.log(nombresConA); // ["Ana", "Carlos"]


