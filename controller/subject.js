const Model = require('../models/index')

class Controller{
    static getAllDataSubject(){
        return new Promise(function(res,rej){
            Model.Subject.findAll({
                include : Model.Teacher
            })
            .then(data =>{
                res(data)
            })
    
            .catch(err =>{
                rej(err)
            })
        })
    }

    static findById(id){
        return Model.Subject.findById(id,{include : Model.Student})
    }

}

module.exports = Controller