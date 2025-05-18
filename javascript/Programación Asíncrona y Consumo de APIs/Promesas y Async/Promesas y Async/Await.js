//Diferencias entre then/catch y async/await
//Las promesas permiten manejar código asincrónico sin bloquear la ejecución.
//Usando .then() y .catch()

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));


//Usando async/await

async function obtenerDatos() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

obtenerDatos();

