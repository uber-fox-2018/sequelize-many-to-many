const models = require('../../models')

module.exports = (req, res) => {
    models.Teacher
        .findAll({
            include: ['Subject'],
            order: [['id']]
        })
        .then(teachers => {
            res.render('teachers/', { teachers })
            // res.send(teachers)
        })
        .catch(err => {
            res.status(500).json(err)
            console.log(err)
        })
}