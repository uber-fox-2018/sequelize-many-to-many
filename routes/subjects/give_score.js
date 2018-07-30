const model = require('../../models')

module.exports = (req, res) => {
    res.send({ 
        subject_id: req.params.id,
        student_id: req.body.student_id,
        score: req.body.score
    })
}