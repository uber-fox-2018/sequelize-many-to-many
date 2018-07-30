const routes = require('express').Router();
const routesTeacher = require('./teachers');
const routesSubject = require('./subjects');
const routesStudent = require('./students');

routes.get('/', (req, res) => {
    res.render('homepage', {title: `Welcome to School!`})
})

routes.use(routesTeacher);
routes.use(routesSubject);
routes.use(routesStudent);

module.exports = routes;