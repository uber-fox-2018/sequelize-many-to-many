'use strict'

const model = require('../../models')
const errorHandler = require('../errorHandler')
const notFoundHandler = require('../notFoundHandler')
const validationError = require('../validationError')

const Student = model.Student

const FindStudentHandler = (http, id) => {
    return new Promise((resolve, reject) => {
        Student
            .findById(id)
            .then(student => {
                if (student)
                    resolve(student)
                else
                    notFoundHandler(http.res, 'student')
            })
            .catch(err => errorHandler(http.res, err))
    })

}

const get = (req, res, next) => {
    const id = req.params.id * 1;

    FindStudentHandler({ req, res, next }, id)
        .then(student => {
            res.render("students/edit", { student, validationErrors: [] })
        })
}

const post = (req, res, next) => {
    let id = req.params.id * 1

    FindStudentHandler({ req, res, next }, id)
        .then(student => {
            student.first_name = req.body.first_name
            student.last_name = req.body.last_name
            student.email = req.body.email

            student.save()
                .then(changes => {
                    res.redirect('/students')
                })
                .catch(err => {
                    if (validationError(err))
                        res.render(`/students/${id}/edit`, { student, data, validationError: err.errors })
                    else
                        errorHandler(res, err)
                })
        })
}

module.exports = { get, post }