const Model = require('../models/index')
class Controller{
    static showData(){
        return new Promise(function(res,rej){
            Model.Student.findAll({
                order : [['id','ASC']]
            })
            .then((data)=>{
                res(data)
            })
    
            .catch(err =>{
                rej(err)
            })
        })
    }

    static getById(id){
        return new Promise(function(res,rej){
            Model.Student.findById(id)
            .then(data =>{
                res(data)
            })

            .catch(err =>{
                rej(err)
            })
        })
    }

    static create(obj){
        return Model.Student.create(obj)
    }

    static update(value, condition){
        return Model.Student.update(value,condition)
    }

    static destroy(condition){
        return Model.Student.destroy(condition)
    }
}

module.exports = Controller