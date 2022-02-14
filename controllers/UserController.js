const conexion = require('../database/db')


exports.index = (req, res) => {
    conexion.query('SELECT * FROM users', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.render('index', { results: result })
        }
    })
}
exports.create = (req, res) => {
    res.render('create')
}
exports.save = (req, res) => {
    const user = req.body.user
    const role = req.body.role
    conexion.query('INSERT INTO users SET ?', { user: user, role: role }, (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/')
        }
    })
}
exports.update = (req, res) => {
    console.log(req.body)
    const id = req.body.id
    const user = req.body.user
    const role = req.body.role
    conexion.query('UPDATE users SET ? WHERE id = ?', [{ user: user, role: role }, id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/')
        }
    })
}
exports.edit = (req, res) => {
    const id = req.params.id
    conexion.query('SELECT * FROM users WHERE id=?', [id], (err, results) => {
        if (err) {
            console.log(err)
        } else {
            res.render('edit', { user: results[0] })
        }
    })
}
exports.delete = (req, res) => {
    const id = req.params.id
    conexion.query('DELETE FROM users WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.redirect('/')
        }
    })
}