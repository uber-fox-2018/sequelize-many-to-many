const model = require('../../models')
const Subject = model.Subject;

module.exports = (req, res) => {
    Subject
        .findAll({
            include: ['Teachers'],
            order: [['id']]
        })
        .then(subjects => {
            res.render('subjects/', { subjects })
        })
        .catch(err => {
            res.status(500).json(err)
            console.log(err)
        })
}