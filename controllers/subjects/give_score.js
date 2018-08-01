const model = require('../../models')
const Enrollment = model.Enrollment

module.exports = (req, res) => {
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