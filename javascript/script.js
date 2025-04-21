//lenguaje de programacion client-side
//actualmente orientado a funciones

//variables
var miVariable = "hola soy una variable con var" //no se usa
let miVariable2 = "variable con let" //solo vive en el scope declarado
const miVariable3 = "constante no cambian los valores";

const hola = "hola fede"
console.log("hola mundo")
console.log(hola) //equivalente a print

//funciones
function myFunction(variable){ //la funcion tiene una declaracion, en los parentesis van los parametros
    console.log(variable)
    return variable//en general las funciones van a retornar algo
}

//funcion flecha
cosnt myArrowFunction = (variable)=> variable;

//ejecicopm de una funcion
myFunction(1)

const variable = true
//condicional con if
if(variable){
    console.log(true);
}
    else{
        console.log(false);
    }

//condicional ternario sirve solo para dos clausulas
variable ? console.log(true); console.log(false);

//arreglos o arrays
//listas de python
const arr = [1, true, "hola como va", 0, 1, 2]

console.log(`la posicion 1 del arreglo es, ${arr[1]}`);

//objetos
//diccionarios
const objeto = {
    clave: "valor",
};

//los objetos estan compuestos por clave valor
console.log(objeto.clave)
