const teacherRoutes = require("express").Router();

const ejs = require("ejs");
const models = require("../models");

teacherRoutes.get("/teachers", (req, res) => {
  models.Teacher.findAll({
    include: [models.Subject],
    orderBy: ["id", "asc"]
  }).then(data => {
    res.render("teacher-ejs/teachersList", { Teachers: data });
  });
});

teacherRoutes.get("/teachers/add", (req, res) => {
  models.Subject.findAll({ raw: true }).then(function(subject) {
    console.log(subject);

    res.render("teacher-ejs/addTeacher", {
      subject: subject
    });
  });
});

teacherRoutes.post("/teachers/add", (req, res) => {
  // res.json(req.body);
  models.Teacher.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    SubjectId: req.body.SubjectId
  })

    .then(() => {
      res.redirect("/teachers");
    })
    .catch(err => {
      res.send(err);
    });
});

teacherRoutes.get("/teachers/delete/:id", (req, res) => {
  let id = req.params.id;
  models.Teacher.destroy({ where: { id: id } }).then(() => {
    res.redirect("/teachers");
  });
});

teacherRoutes.get("/teachers/edit/:id", function(req, res) {
  let id = req.params.id;
  models.Teacher.findById(id)
    .then(function(teachers) {
      models.Subject.findAll()
      .then(function(subject) {        
        res.render("teacher-ejs/editTeacher", { teachers , subject });
      });
    })
    .catch(err => {
      res.send(err);
    });
});

teacherRoutes.post("/teachers/edit/:id", function(req, res) {
  let id = req.params.id;
  models.Teacher.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      SubjectId: req.body.SubjectId
    }, 
    { where: { id: id } }
  ).then(function() {
    res.redirect("/teachers");
  });
});

module.exports = teacherRoutes;
