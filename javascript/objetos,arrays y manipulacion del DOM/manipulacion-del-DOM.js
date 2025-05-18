//Manipulación del DOM 
//Selección de elementos (querySelector y getElementById)

let titulo = document.getElementById("titulo");
let parrafo = document.querySelector(".parrafo");

//Modificación de contenido (innerHTML, textContent)

titulo.innerHTML = "Nuevo Título";
parrafo.textContent = "Nuevo texto en el párrafo";

//Eventos (addEventListener, onClick, onChange)

let boton = document.getElementById("boton");
boton.addEventListener("click", function() {
    alert("¡Botón clickeado!");
});


//Ejemplo de cambio de color al hacer clic en un botón:

boton.addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});




