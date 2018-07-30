const Model = require('../models/index')
class Controller{
    static showData(){
        return new Promise(function(res,rej){
            Model.Student.findAll({
                
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
}

module.exports = Controller