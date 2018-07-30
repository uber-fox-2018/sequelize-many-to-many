const model = require('../../models')
const giveScore = require('../../helpers/score_helper')

const Subject = model.Subject

module.exports = (req, res) => {
    Subject
        .findById(req.params.id, { include: ['Students'] })
        .then(subject => {
            res.render('subjects/enrolled_students', { subject, giveScore })
        })
}