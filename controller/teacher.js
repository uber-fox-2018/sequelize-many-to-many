const Model = require('../models/index')

class Controller{
    static showTeacher(){
    return new Promise(function(res,rej){
        Model.Teacher.findAll({
            include : {
                model : Model.Subject
            },
            order : 
            [
                ['id','ASC']
            ],
        })
        .then(data =>{
            res(data)
        })
 
        .catch(err =>{
            rej(err)
        })
    })
    }

    static addTeacher(obj){
        return new Promise(function(res,rej){
            Model.Teacher.create(obj)
            .then(() =>{
                res()
            })

            .catch(err =>{
                rej(err)
            })
        })
    }

    static getById(id){
        return new Promise(function(res,rej){
            Model.Teacher.findById(id)
            .then(data => {
                res(data)
            })

            .catch(err =>{
                rej(err)
            })
        })
    }

    static edit(dataToEdit,condition){
        return new Promise(function(res,rej){
            Model.Teacher.update(dataToEdit,condition)
            .then(() =>{
                res()
            })

            .catch(err =>{
                rej(err)
            })
        })
    }

    static delete(obj){
        return new Promise(function(res,rej){
            Model.Teacher.destroy(obj)
            .then(()=>{
                res()
            })

            .catch(err =>{
                rej(err)
            })
        })
    }

}

module.exports = Controller