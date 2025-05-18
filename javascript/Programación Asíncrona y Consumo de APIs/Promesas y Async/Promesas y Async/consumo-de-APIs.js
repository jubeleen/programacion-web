//fetch() vs axios
//Ambos sirven para hacer solicitudes HTTP.
//📌 Ejemplo con fetch() (nativo en JS)


fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));


//📌 Ejemplo con axios (requiere instalación)


import axios from "axios";

axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(response => console.log(response.data))
    .catch(error => console.error("Error:", error));


//Peticiones GET y POST
//📌 Ejemplo GET con fetch()

async function obtenerUsuarios() {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
}

obtenerUsuarios();


//📌 Ejemplo POST con fetch()

async function crearPost() {
    let nuevoPost = {
        title: "Nuevo Post",
        body: "Contenido del post",
        userId: 1
    };

    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(nuevoPost),
        headers: { "Content-Type": "application/json" }
    });

    let data = await response.json();
    console.log(data);
}

crearPost();

