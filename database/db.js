const mysql = require('mysql')

const conexion = mysql.createConnection({
    host: 'localhost',
    // port: '8080',               
    user: 'root',
    password: '',
    database: 'crudnodejs'
})
conexion.connect((error) => {
    if (error) {
        console.log(error)
        return
    }
    console.log('CONECTADO!')

})

module.exports = conexion