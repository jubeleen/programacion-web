
//setTimeout()
//recibe por parametros una funcion y un valor en milisegundos

setTimeout(()=>{
    const button = document.getElementById('boton')

    button.addEventListener('click',() =>{
        alert("fui presionado despues de 3 segundos")
    });
}, 3000);

//setInterval()
let contador = 0;
let intervalo = setInterval(() => {
    contador++;
    console.log("contador", contador);
}, 1000);

//asincronia
//metodos para consumir una api
//get, post ,put ,delete

//fetch
//lo vamos a utilizar para conectarnos/consumir una api
//fetchurl, opciones
//opciones es un opcional para pasar un objeto que le diga que tipo
//de metodo utiliza, encabezado,cuerpo,etc

fetch('https://rickandmortyapi.com/api/character')
    .then(data => data.json())
    .then(result => console.log(result))

    .catch(error => console.error("Error:", error));

crearPost();