//ejercicio 1

const productos = [
  { nombre: "Notebook", precio: 800 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Teclado", precio: 50 },
];

//1

productos.forEach(producto =>{
    if(producto.precio>300){
        console.log(`${producto.nombre}es caro`);
    } else{
        console.log(`${producto.nombre}es barato`);
    }
})

//2

function obtenerPrecioPromedio (array){
    let total=[];
    array.forEach(producto => total += producto.precio);
    return total/array.lenght;
}
console.log("precio.promedio", obtenerPrecioPromedio (productos) )

//ejercicio 2

const productos2 = [
  { nombre: "Notebook", precio: 800 },
  { nombre: "Celular", precio: 500 },
  { nombre: "Teclado", precio: 50 },
];

//1

const productosCaros = productos.filter(p => p.precio > 100);

//2

const productosEnMinuscula = productos.map(p => p.nombre.toLowerCase() );

//3

const contenedor = document.getElementById("productos");

const ul = document.createElement("ul")