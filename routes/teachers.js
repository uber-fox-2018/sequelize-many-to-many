const routesTeacher = require('express').Router();
const teacherController = require('../controllers/teacherController');

routesTeacher.get('/teachers', teacherController.showTeachers);

routesTeacher.get('/teachers/add', teacherController.getFormAdd);
routesTeacher.post('/teachers/add', teacherController.addTeacher);

routesTeacher.get('/teachers/edit/:id', teacherController.getTeacher);
routesTeacher.post('/teachers/edit/:id', teacherController.updateTeacher);

routesTeacher.get('/teachers/delete/:id', teacherController.deleteTeacher);

module.exports = routesTeacher;