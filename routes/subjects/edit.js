const model = require('../../models')

const get = (req, res) => {
    const id = req.params.subjectId * 1;

    model.Subject
        .findOne({ where: { id } })
        .then(subject => {
            res.render("subjects/edit", { subject, validationErrors: [] })
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

const post = (req, res) => {
    let id = req.params.subjectId * 1

    let obj = {
        subject_name: req.body.subject_name,
    }

    model.Subject
        .update({ 
            subject_name: obj.subject_name
        }, { where: { id } })
        .then(changes => {
            res.redirect('/subjects')
        })
        .catch(err => {
            if (err.name == "SequelizeValidationError")
                res.render('subjects/edit', { subject: obj, validationErrors: err.errors })
            else
                res.status(500).json(err)
        })
}

module.exports = { get, post }