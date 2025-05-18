//Guardar y recuperar datos
//📌 Guardar en localStorage (persistente después de recargar la página)

localStorage.setItem("usuario", "Juan");
console.log(localStorage.getItem("usuario")); // "Juan"


//📌 Guardar en sessionStorage (se borra al cerrar la pestaña)

sessionStorage.setItem("token", "abc123");
console.log(sessionStorage.getItem("token")); // "abc123"

//📌 Eliminar datos

localStorage.removeItem("usuario");
sessionStorage.clear();

//Ejemplo práctico: Guardar y mostrar una lista de tareas en localStorage.

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

function agregarTarea(tarea) {
    tareas.push(tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

agregarTarea("Aprender JavaScript");
console.log(localStorage.getItem("tareas")); // ["Aprender JavaScript"]

