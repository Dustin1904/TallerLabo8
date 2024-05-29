// REQUERIR EXPRESS
const express = require('express')
// INSTANCIA DE EXPRESS
const app = express()
// PROCESAR DATOS EN FORMATO JSON
app.use(express.json())
// REQUERIR PATH
const path = require('path')

// Integrantes 
const integrantes = [
    {
        id: 1,
        nombre: "Dustin Joel Marcatoma Saldaña",
        edad: 20,
        peso: 74,
        estatura: 1.60,
        fecha_nacimiento: "2004-01-02",
        tipo_sangre: "O+",
        nacionalidad: "Ecuatoriano",
        correo: "dustin04ms@gmail.com",
        celular: "0979008923",
        imagen:"" 
    },
    {
        id: 2,
        nombre: "Anthony Alejandro Minga Campoverde",
        edad: 22,
        peso: 85,
        estatura: 1.75,
        fecha_nacimiento: "2002-03-27",
        tipo_sangre: "A+",
        nacionalidad: "Ecuatoriano",
        correo: "anthony.minga@epn.edu.ec",
        celular: "0968862213",
        imagen:""
    },
    {
        id: 3,
        nombre: "Estefanía Melisa Sánchez Párraga",
        edad: 24,
        peso: 49,
        estatura: 1.60,
        fecha_nacimiento: "2000-12-11",
        tipo_sangre: "B+",
        nacionalidad: "Ecuatoriana",
        correo: "estefania.sanchez@epn.edu.ec",
        celular: "0992190967",
        imagen:""
    },
    {
        id: 4,
        nombre: "Alan Josue Rios Mendoza",
        edad: 21,
        peso: 70,
        altura: 1.67,
        fecha_nacimiento: "2003-01-02",
        tipo_sangre: "O+",
        nacionalidad: "Ecuatoriano",
        correo: "alan.rios@epn.edu.ec",
        celular: "0960131442",
        imagen: ""
    },
    {
        id: 5,
        nombre: "Rob Samuel Cuti Umaquinga",
        edad: 21,
        peso: 85,
        altura: 1.74,
        fecha_nacimiento: "2003-10-11",
        tipo_sangre: "O+",
        nacionalidad: "Ecuatoriano",
        correo: "rob.cutip@epn.edu.ec",
        celular: "0984253830",
        imagen: ""
    },
    {
        id: 6,
        nombre: "John Jairo Mata Manosalvas",
        edad: 21,
        peso: 70,
        altura: 1.87,
        fecha_nacimiento: "2003-04-27",
        tipo_sangre: "A+",
        nacionalidad: "Ecuatoriano",
        correo: "john.mata@epn.edu.ec",
        celular: "0990123317",
        imagen: ""
    }
]

// RUTAS 
// Presentar la informacion del grupo de trabajo
app.get('/',(req,res) => {
    res.json([
        {
            numero_grupo: 3,
            integrante: ["Dustin Marcatoma","Anthony Minga","Melisa Sánchez","John Mata","Alan Ríos","Samuel Cuti"],
            asignatura:"Desarrollo de aplicaciones web"   
        }
    ])
})


// Presentar informacion de los integrantes del grupo de trabajo 
app.get('/integrantes',(req,res) =>  {
    res.json(integrantes)
})

// Presentar la información de un integrante del grupo 
app.get('/integrantes/:id',(req,res) => {
    const {id} = req.params
    const response = integrantes.find(integrante => integrante.id === +id)
    response ? res.json( response ) : res.status(404).json({message: 'Integrante no encontrado'})
})

// Hacer stática la carpeta que contiene las imagenes
app.use(express.static(path.join(__dirname, 'public')))

//Presentar un HTML con algunos porductos
app.get('/productos',(req,res) =>{
    res.sendFile('index.html',{root:__dirname})
})



// MIDLEWARE CON UN MENSAJE DE ERROR CUANDO NO EXISTE UNA RUTA
app.use((req, res, next) => {
    res.status(404) // Establecer el estado de la respuesta
    res.send({ error: 'Not found' }) // Enviar una respuesta con un mensaje de error
})

// PUERTO DE EJECUCION
app.listen(3000)
// INFORMACION INTERNA
console.log("Ejecutando server");