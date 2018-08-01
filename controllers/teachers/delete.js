const model = require('../../models')

const get = (req, res) => {
    const id = req.params.teacherId * 1;

    model.Teacher
        .findById(id, { include: ['Subject'] })
        .then(teacher => {
            res.render("teachers/delete", { teacher })
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

const post = (req, res) => {
    let id = req.params.teacherId * 1

    model.Teacher
        .destroy({ where: { id } })
        .then(changes => {
            res.redirect('/teachers')
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

module.exports = { get, post }