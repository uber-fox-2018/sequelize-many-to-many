'use strict'

const model = require('../../models')
const Student = model.Student

const get = (req, res) => {
    res.render("students/add", { validationErrors: [] })
}

const post = (req, res) => {

    Student
        .create({
            first_name: req.body.first_name || null,
            last_name: req.body.last_name || null,
            email: req.body.email || null
        })
        .then(student => {
            res.redirect('/students')
        })
        .catch(err => {
            if (err.name == "SequelizeValidationError" || "SequelizeUniqueConstraintError")
                res.render('students/add', { validationErrors: err.errors })
            else
                res.status(500).json(err)
        })
}

module.exports = { get, post }