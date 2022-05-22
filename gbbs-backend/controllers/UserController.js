
import UserModel from "../models/UserModel.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import {promisify} from 'util'




// Crear un registro


export const createUser = async(req, res) => {
    try {
        const password = req.body.password
        let passHash = await bcryptjs.hash(password, 8)
        await UserModel.create({
            email: req.body.email,
            username: req.body.username,
            password: passHash
        })

        res.json( {
            alert:true,
            alertTitle: 'Well done',
            alertMessage: '¡Usuario creado correctamente!',
            alertIcon: 'success',
            showConfirmButton: true,
            timer: false,
            ruta: '/'
        })
        
    } catch (error) {
        res.json( {
            alert:false,
            alertTitle: 'Error',
            alertMessage:error.message,
            alertIcon: 'error',
            showConfirmButton: false,
            timer: 5500
        })
    }
}

export const login = async(req, res) => {

    try {
        
        const username = req.params.username
        const password = req.params.password

        console.log(`intentando logear a ${username} - ${password}`)

        if(!username || !password){
            res.json( {
                alert:false,
                alertTitle: 'Advertencia',
                alertMessage: '¡Complete los campos!',
                alertIcon: 'info',
                showConfirmButton: true,
                timer: false
            })
        }else{
            const user = await UserModel.findAll({
                where:{username:username}
            })
            if(user.length === 0 || !(await bcryptjs.compare(password, user[0].password))){
                res.json({
                    alert:false,
                    alertTitle: 'Error',
                    alertMessage: 'Usuario y/o Password incorrectas',
                    alertIcon: 'error',
                    showConfirmButton: true,
                    timer: false
                })
            }else{
                const id = user[0].id

                const token = jwt.sign({id:id}, 'super_secreto', {
                    expiresIn: '7d'
                })

                console.log('TOKEN: '+ token + ' para el usuario: '+username)

                const cookiesOptions = {
                    expires: new Date(Date.now()+ 90 * 24 * 60 * 60 * 1000 ),
                    httpOnly: true
                }

                res.json({
                    "alert": {
                        alert:true,
                        alertTitle: 'Conexion exitosa',
                        alertMessage: '¡LOGIN CORRECTO!',
                        alertIcon: 'success',
                        showConfirmButton: false,
                        timer:1500,
                        ruta: '/foros'
                    },
                    "cookie": {
                        name: 'jwt',
                        token: token
                    }
                })
            }
            
        }

    } catch (error) {
        console.log(error)
        res.json(error.message)
        
    }
}


export const inAuthUser = async(req, res, next) => {
    if(req.params.token){
        try {
            const decodificada = await promisify(jwt.verify)(req.params.token, 'super_secreto')

            const user = await UserModel.findAll({
                where:{id:decodificada.id}
            })

            if(!user){return next()}
            res.json(user[0])
            return next()

        } catch (error) {
            res.json(false)
            return next()
        }
    }

    res.json(false)

}