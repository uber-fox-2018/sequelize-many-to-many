const model = require('../../models')

const get = (req, res) => {
    const id = req.params.id * 1;

    model.Student
        .findById(id)
        .then(student => {
            res.render("students/delete", { student })
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

const post = (req, res) => {
    let id = req.params.id * 1

    model.Student
        .destroy({ where: { id } })
        .then(changes => {
            res.redirect('/students')
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

module.exports = { get, post }