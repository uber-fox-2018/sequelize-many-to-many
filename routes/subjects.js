const routes = require('express').Router();
const { getAllSubjects, addForm, addSubject, getSubject, updateSubject, deleteSubject, subjectsEnrollment, studentForScoring, scoring } = require('../controllers/subject');

routes.get('/subjects', getAllSubjects);
routes.get('/subjects/add', addForm);
routes.post('/subjects/add', addSubject);
routes.get('/subjects/edit/:id', getSubject);
routes.post('/subjects/edit/:id', updateSubject);
routes.get('/subjects/delete/:id', deleteSubject);

routes.get('/subjects/:id/enrolled-students', subjectsEnrollment);
routes.get('/subjects/:idSubject/give-score/:idStudent', studentForScoring);
routes.post('/subjects/:idSubject/give-score/:idStudent', scoring);
module.exports = routes;