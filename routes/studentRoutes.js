const studentsRoutes = require("express").Router();

const ejs = require("ejs");
const Model = require("../models");

// studentsRoutes.get("/", (req, res) => {
//   res.render("index");
// });

studentsRoutes.get("/students", (req, res) => {
  Model.Student.findAll().then(data => {
    res.render("student-ejs/studentList", { Students: data });
  });
});

studentsRoutes.get("/students/add", (req, res) => {
  res.render("student-ejs/addStudent");
});

studentsRoutes.post("/students/add", (req, res) => {
  Model.Student.create(req.body)

    .then(() => {
      res.redirect("/students");
    })
    .catch(err => {
      res.redirect("/students", { show: err });
    });
});

studentsRoutes.get("/students/delete/:id", (req, res) => {
  let id = req.params.id;

  Model.Student.destroy({ where: { id: id } }).then(() => {
    res.redirect("/students");
  });
});

studentsRoutes.get("/students/edit/:id", function(req, res) {
  let id = req.params.id;
  Model.Student.findById(id).then(function(students) {
    res.render("student-ejs/editStudent", { Students: students });
  });
});

studentsRoutes.post("/students/edit/:id", function(req, res) {
  let id = req.params.id;
  Model.Student.update(
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    },
    { where: { id: id } }
  ).then(function() {
    res.redirect("/students");
  });
});

studentsRoutes.get("/students/:id/add-subject", function(req, res) {
  let id = req.params.id;
  Model.Student.findById(req.params.id)
    .then(student => {
      Model.Subject.findAll().then(function(subject) {
        res.render("student-ejs/studentAddSubject", {
          student: student,
          subject: subject
        });
      });
    })
    .catch(function(err) {
      res.send(err);
    });
});

studentsRoutes.post("/students/:id/add-subject", function(req, res) {
  let studentId = req.params.id;
  Model.Subject.findAll()
  .then(subject => {
    console.log(`==>`, req.body.SubjectId);
    Model.SubjectStudent.create({
      StudentId: studentId,
      SubjectId: req.body.SubjectId

    })
      .then(function() {
        res.redirect("/students");
      })
      .catch(function(err) {
        res.send(err);
      });
  });
});





module.exports = studentsRoutes;
