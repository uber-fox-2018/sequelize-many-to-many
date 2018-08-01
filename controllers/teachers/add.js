'use strict'

const model = require('../../models')

const Teacher = model.Teacher
const Subject = model.Subject

const formAddHandler = (res, validationErrors) => {
    Subject
        .findAll()
        .then(subjects => {
            res.render('teachers/add', { 
                subjects: subjects, 
                validationErrors: validationErrors })
        })
}

const get = (req, res) => {
    formAddHandler(res, [])
}

const post = (req, res) => {
    let obj = {
        first_name: req.body.first_name || null,
        last_name: req.body.last_name || null,
        email: req.body.email || null,
        subject_id: req.body.subject_id || null
    }

    Teacher
        .create(obj)
        .then(teacher => {
            res.redirect('/teachers')
        })
        .catch(err => {
            if (err.name == "SequelizeValidationError" || "SequelizeUniqueConstraintError")
                formAddHandler(res, err.errors)
            else
                res.status(500).json(err)
        })
}

module.exports = { get, post }