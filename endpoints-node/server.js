import express from 'express'

const app = express()
const PORT = 3000

app.use(express.json());

//GET 
app.get('/', (req, res) => {
    res.send('Este es el primer endpoint hecho con express');
});

//endpoint con parametro
app.get('/api/user/:id', (req, res) =>{
    //destructuracion
    const {id} = req.params;
    if (typeof id === "String") {
        const idInt = parseInt(id);
        console.log(idInt);
    }
    res.json({message: `este es el id dado ${id}`});
});

//query params
app.get('/api/search', (req, res) => {
    const {name, lastname} = req.query//desconstruimos
    res.json({
        Name: name,//renombramos
        lastname,//reutilizamos
    });
    //http://localhost:3000/api/search?name=July&lastname=Mendoza
});

//POST
app.post('/api/user', (req, res) => {
    const {name, email} = req.body
    res.json({message: 'Usuario creado', data: {name, email}});
});

//TEST POST
//UPDATE
//DELETE 
//2 puntos

//Iniciar Server
app.listen(PORT, ()=>{
    console.log(`El servidor corriendo en ${PORT}`);
});