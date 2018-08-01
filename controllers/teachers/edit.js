const model = require('../../models')
const Teacher = model.Teacher
const Subject = model.Subject

const formEditHandler = (res, teacher, validationErrors) => {
    Subject
        .findAll()
        .then(subjects => {
            res.render('teachers/edit', {
                teacher: teacher,
                subjects: subjects,
                validationErrors: validationErrors
            })
        })
}

const get = (req, res) => {
    id = req.params.teacherId * 1
    model.Teacher
        .find({ where: { id } })
        .then(teacher => {
            if (teacher)
                formEditHandler(res, teacher, [])
            else
                res.send("ID not found")
        })
        .catch(err => {
            res.send(err)
        })
}

const post = (req, res) => {
    id = req.params.teacherId * 1

    Teacher
        .findById(id)
        .then(teacher => {
            teacher.fist_name = req.body.fist_name || null
            teacher.last_name = req.body.last_name || null
            teacher.email = req.body.email || null
            teacher.subject_id = req.body.subject_id || null

            teacher.save()
                .then(changes => {
                    res.redirect('/teachers')
                })
                .catch(err => {
                    if (err.name == "SequelizeValidationError" || "SequelizeUniqueConstraintError")
                        formEditHandler(res, teacher, err.errors)
                    else
                        res.status(500).json(err)
                })

        })
}

module.exports = { get, post }