const model = require('../../models')

const get = (req, res) => {
    const id = req.params.id * 1;

    model.Student
        .findById(id)
        .then(student => {
            res.render("students/edit", { student, validationErrors: [] })
        })
        .catch(err => {
            res.status(500).json(err)
        })
}

const post = (req, res) => {
    let id = req.params.id * 1

    let updatedStudent = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }

    model.Student
        .update({
            first_name: updatedStudent.first_name,
            last_name: updatedStudent.last_name,
            email: updatedStudent.email
        }, { where: { id } })
        .then(changes => {
            res.redirect('/students')
        })
        .catch(err => {
            if (err.name == "SequelizeValidationError" || "SequelizeUniqueConstraintError")
                res.render('students/edit', { student: updatedStudent, validationErrors: err.errors })
            else
                res.status(500).json(err)
        })
}

module.exports = { get, post }