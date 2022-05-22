import {Sequelize} from 'sequelize'


const db = new Sequelize('gbbs', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db