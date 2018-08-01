'use strict'

const model = require('../../models')

const get = (req, res) => {
    res.render("subjects/add", { validationErrors: [] })
}

const post = (req, res) => {
    let obj = {
        subject_name: req.body.subject_name,
    }

    model
        .Subject
        .create(obj)
        .then(subject => {
            res.redirect('/subjects')
        })
        .catch(err => {
            if (err.name == "SequelizeValidationError")
                res.render('subjects/add', { validationErrors: err.errors })
            else
                res.status(500).json(err)
        })
}

module.exports = { get, post }