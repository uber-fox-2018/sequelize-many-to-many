const RequestController = require("./requestcontroller.js");
const section = "Student";

class StudentRequestController{
	constructor(){
		
	}

	static viewall_get(req,res){
		return RequestController.viewall_get(section,req,res);
	}

	static add_get(req,res){
		return RequestController.add_get(section,req,res);
	}

	static add_post(req,res){
		return RequestController.add_post(section,req,res);
	}

	static delete_get(req,res){
		return RequestController.delete_get(section,req,res);
	}

	static edit_get(req,res){
		return RequestController.edit_get(section,req,res);
	}

	static edit_post(req,res){
		return RequestController.edit_post(section,req,res);
	}

	static view_enrolled_get(req,res){
		
	}

	static view_enrolled_post(req,res){
		let Enrollment = RequestController.getModel("Enrollment");

		Enrollment.update(
			req.body
			,{
				returning: true, where: {id:req.params.id}
			}
		)
			.then()
			.catch();
	}
}

module.exports = StudentRequestController;