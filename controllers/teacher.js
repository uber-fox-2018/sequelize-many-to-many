const Model = require('../models/index')

class Controller {

    static showAll() {
        return new Promise(function (resolve, reject) {
            Model.Teacher
                .findAll({
                    attributes: ['id', 'firstName', 'lastName', 'email'],
                    include: [{ model: Model.Subject }],
                    order: [['id', 'ASC']],
                })
                .then(function (data) {
                    resolve(data)
                })
                .catch(function (err) {
                    reject(err)
                })
        })
    }

    static showById(id) {
        return new Promise(function (resolve, reject) {
            Model.Teacher
                .findById(id)
                .then(function (data) {
                    resolve(data)
                })
                .catch(function(err){
                    reject(err)
                })
        })
    }

    static add(fname, lname, email, subjectid) {
        // return new Promise(function(resolve,reject){
        return Model.Teacher
            .create({
                firstName: fname,
                lastName: lname,
                email: email,
                SubjectId: subjectid,
            }, {})
        // })
    }

    static update(fname, lname, email, subjectid, id) {
        // console.log('ini di controller update',fname,lname,email,subjectid);
        // return new Promise(function(resolve,reject){
            return Model.Teacher
                .update({
                    firstName: fname,
                    lastName: lname,
                    email: email,
                    SubjectId: subjectid,
                }, {
                        where: {
                            id: id
                        }
                    })
        // })
    }

    static delete(id) {
        return Model.Teacher
            .destroy({
                where: {
                    id: id
                }
            })
    }

    static showSubject() {
        return new Promise(function (resolve, reject) {
            Model.Subject
                .findAll({
                    attributes: ['id', 'subjectName']
                })
                .then(function (dataSubject) {
                    resolve(dataSubject)
                })
                .catch(function (err) {
                    reject(err)
                })
        })
    }

}

module.exports = Controller