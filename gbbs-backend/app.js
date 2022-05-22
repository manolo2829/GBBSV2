// importamos express
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
// importamos la conexion a la base de datos
import db from "./database/db.js";
// importamos nuestro enrutador
import router from "./routes/routes.js";


// le asignamos la clase expresss a esta constante para poder utilizar todos los metodos
const app = express()

// configuramos cors para no tener errores
app.use( cors() )
app.use(express.json())
app.use('/users', router)

// SETEAMOS LA CARPETA PUBLIC PARA ARCHIVOS ESTATICOS
app.use(express.static('public'))

// SETEAMOS LAS VARIABLES DE ENTORNO
dotenv.config({path: './env/.env'})

// PARA PODER TRABAJAR CON LOS COOKIES
app.use(cookieParser())

// para eliminar el cache y que no s epueda volver con el boton back luego de que hacemos el logout
app.use(function(req, res, next){
    if(!req.user){
        res.header('Cache-Control', 'private, no-cache, no store, must-revalidate');
    }
    next()
})

try {
    await db.authenticate()
    console.log('Conexion exitosa a la DB')
} catch (error) {
    console.log(`El error de la conexion es: ${error}`)
}

// app.get('/', (req, res) => {
//     res.send('Hola mundo')
// })

app.listen(8000, () => {
    console.log('Server up running in http://localhost:8000/')
}) 