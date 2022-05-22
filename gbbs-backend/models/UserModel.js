
import db from "../database/db.js";
// importamos Sequelize
import { DataTypes } from "sequelize";
// definimos nuestra conexion
const UserModel = db.define('users', {
    // ponemos los campos que vamos a utilizar, el nombre del campo y dentro definimos el tipo de campo
    email: { type: DataTypes.STRING},
    username: {type: DataTypes.STRING},
    password: {type: DataTypes.STRING}
})

export default UserModel;