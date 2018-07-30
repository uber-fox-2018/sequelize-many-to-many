const routes = require('express').Router();
const { getAllTeachers , addForm, addTeacher, getTeacher, updateTeacher, deleteTeacher} = require('../controllers/teacher');

routes.get('/teachers', getAllTeachers);
routes.get('/teachers/add', addForm);
routes.post('/teachers/add', addTeacher);
routes.get('/teachers/edit/:id', getTeacher);
routes.post('/teachers/edit/:id', updateTeacher);
routes.get('/teachers/delete/:id', deleteTeacher);

module.exports = routes;