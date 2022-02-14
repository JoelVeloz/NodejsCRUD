const { json } = require('express')
const express = require('express')
const router = require('./routes/web')
const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))
app.use(express(json))
app.use(router)
// Puerto donde se aloja el servidor 
const port = 3001;
app.listen(port, () => {
    console.log('La aplicación esta en linea')
})