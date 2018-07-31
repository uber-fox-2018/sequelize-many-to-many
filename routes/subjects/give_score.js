const model = require('../../models')
const Subject = model.Subject
const Student = model.Student
const Enrollment = model.Enrollment

module.exports = (req, res) => {
    // Subject
    //     .findById(req.params.id, { include: 'Students' })
    //     .then(subject => {
    //         let student = subject.Students.find(student => {
    //             return student.id === req.body.student_id * 1
    //         })
    //         if (student) {
    //             student.Enrollment.score = req.body.score * 1
    //             subject.save()
    //                 .then(changes => {
    //                     res.send({ msg: "OK", changes })
    //                 })
    //                 .catch(err => {
    //                     res.send(err)
    //                 })
    //         }
    //         else {
    //             res.send('NOT FOUND')
    //         }
    //     })
    let subject_id = req.params.id

    Enrollment
        .update({ score: req.body.score }, {
            where: {
                subject_id: subject_id,
                student_id: req.body.student_id
            }
        })
        .then(() => {
            res.redirect(`/subjects/${subject_id}/enrolled-students`)
        })
        .catch(err => res.send(err))
}