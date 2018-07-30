const models = require('../../models')
const Teacher = models.Teacher
const subjectName = require('../../helpers/unassigned_subject')

module.exports = (req, res) => {

    Teacher
        .findAll({
            include: ['Subject'],
            order: [['id']]
        })
        .then(teachers => {
            res.render('teachers/', { teachers, subjectName })
            // res.send(teachers)
        })
        .catch(err => {
            res.status(500).json(err)
            console.log(err)
        })
}