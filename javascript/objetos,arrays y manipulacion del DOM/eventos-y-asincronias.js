//Callbacks
//Un callback es una función que se pasa como argumento a otra función.

function procesar(nombre, callback) {
    console.log("Procesando datos de " + nombre);
    callback();
}

procesar("Juan", function() {
    console.log("Proceso finalizado.");
});

//setTimeout y setInterval
//📌 setTimeout ejecuta una función después de un tiempo específico.
//📌 setInterval ejecuta una función repetidamente cada cierto intervalo.

setTimeout(() => {
    console.log("Esto se ejecuta después de 3 segundos");
}, 3000);

let contador = 0;
let intervalo = setInterval(() => {
    console.log("Contador:", contador++);
    if (contador > 5) clearInterval(intervalo);
}, 1000);

//Introducción a Promesas (then, catch)
//Las promesas se usan para manejar operaciones asincrónicas.

let promesa = new Promise((resolve, reject) => {
    let exito = true;
    if (exito) resolve("Operación exitosa");
    else reject("Error en la operación");
});

promesa
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));


