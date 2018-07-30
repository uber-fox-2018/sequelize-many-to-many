const Model = require('../models/index')

class Controller{
    static create(value){
        return new Promise(function(res,rej){
            Model.SubjectStudents.create(value)
            
            .then((data) =>{
                res(data)
            })
            .catch(err =>{
                rej(err)
            })
        })
    }
}
module.exports = Controller