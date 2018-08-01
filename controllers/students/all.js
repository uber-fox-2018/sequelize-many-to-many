'use strict'

const models = require('../../models')
const errorHandler = require('../errorHandler')

const Student = models.Student

module.exports = (req, res, next) => {
    Student
        .findAll({ order: [['id']] })
        .then(students => {
            res.render('students/', { students })
        })
        .catch(err => {
            errorHandler({ res, next }, err)
        })
}