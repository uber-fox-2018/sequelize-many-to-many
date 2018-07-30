const model = require('../../models')

const get = (req, res) => {
    const id = req.params.subjectId * 1;

    model.Subject
        .findOne({ where: { id } })
        .then(subject => {
            res.render("subjects/delete", { subject })
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

const post = (req, res) => {
    let id = req.params.subjectId * 1

    model.Subject
        .destroy({ where: { id } })
        .then(changes => {
            res.redirect('/subjects')
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

module.exports = { get, post }