const model = require('../../models')

module.exports = (req, res) => {
    model.Student
        .findAll({ order: [['id']] })
        .then(students => {
            res.render('students/', { students })
        })
        .catch(err => {
            res.send(500).json(err)
        })
}