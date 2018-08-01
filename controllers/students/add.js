'use strict'

const model = require('../../models')
const errorHandler = require('../errorHandler')
const validationError = require('../validationError')

const Student = model.Student

const get = (req, res) => {
    res.render("students/add", { validationErrors: [] })
}

const post = (req, res, next) => {

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
            validationError(err)
            res.render('students/add', { validationErrors: err.errors })
        })
}

module.exports = { get, post }