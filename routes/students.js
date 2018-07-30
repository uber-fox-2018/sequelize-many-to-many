const routes = require('express').Router();
const { getAllStudents , addForm, addStudent, getStudent, updateStudent, deleteStudent, getStudentSubject, addSubjectToStudent} = require('../controllers/student');

routes.get('/students', getAllStudents);
routes.get('/students/add', addForm);
routes.post('/students/add', addStudent);
routes.get('/students/edit/:id', getStudent);
routes.post('/students/edit/:id', updateStudent);
routes.get('/students/delete/:id', deleteStudent);

routes.get('/students/:id/add-subject', getStudentSubject);
routes.post('/students/:id/add-subject', addSubjectToStudent);

module.exports = routes;