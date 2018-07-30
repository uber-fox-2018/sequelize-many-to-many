const routesStudent = require('express').Router();
const studentController = require('../controllers/studentController');

routesStudent.get('/students', studentController.showStudents);

routesStudent.get('/students/add', studentController.getFormAdd);
routesStudent.post('/students/add', studentController.addStudent);

routesStudent.get('/students/edit/:id', studentController.getStudent);
routesStudent.post('/students/edit/:id', studentController.updateStudent);

routesStudent.get('/students/delete/:id', studentController.deleteStudent);

routesStudent.get('/students/:id/add-subject', studentController.getStudentSubject);
routesStudent.post('/students/:id/add-subject', studentController.addSubjectToStudent);


module.exports = routesStudent;