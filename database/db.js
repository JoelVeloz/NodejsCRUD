const mysql = require('mysql')
require('dotenv').config()

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const database = process.env.DB_DATABASE;
const user = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


const conexion = mysql.createConnection({
    host: host,
    user: user,
    port: port,
    password: password,
    database: database,
})
conexion.connect((error) => {
    if (error) {
        console.log(error)
        return
    }
    console.log('CONECTADO!')

})

module.exports = conexion