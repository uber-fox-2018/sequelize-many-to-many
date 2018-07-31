const subjectRoutes = require("express").Router();

const ejs = require("ejs");
const models = require("../models");

subjectRoutes.get("/subjects", (req, res) => {
  models.Subject.findAll({ include: [models.Teacher] }).then(subjects => {
    res.render("subject-ejs/subjectList", { subjects });
  });
});

subjectRoutes.get("/subjects/add", (req, res) => {
  res.render("subject-ejs/addSubject");
});

subjectRoutes.post("/subjects/add", (req, res) => {
  models.Subject.create(req.body)

    .then(() => {
      res.redirect("/subjects");
    })
    .catch(err => {
      res.redirect("/subjects", { show: err });
    });
});

subjectRoutes.get("/subjects/delete/:id", (req, res) => {
  let id = req.params.id;
  models.Subject.destroy({ where: { id: id } }).then(() => {
    res.redirect("/subjects");
  });
});

subjectRoutes.get("/subjects/edit/:id", function(req, res) {
  let id = req.params.id;
  models.Subject.findById(id).then(function(subjects) {
    res.render("subject-ejs/editSubject", { subjects: subjects });
  });
});

subjectRoutes.post("/subjects/edit/:id", function(req, res) {
  let id = req.params.id;
  models.Subject.update(
    {
      subjectName: req.body.subjectName
    },
    { where: { id: id } }
  ).then(function() {
    res.redirect("/subjects");
  });
});

subjectRoutes.get("/subjects/:id/enrolled-students", function(req, res) {
  let id = req.params.id;
  models.Subject.findById(id, {
    include: [
      {
        model: models.Student
      }
    ]
  })
    .then(data => {
      // res.json(data);
      res.render("subject-ejs/subjectGiveScore", {
        data: data
      });
    })
    .catch(err => {
      res.send(err.message);
    });
});

subjectRoutes.post(
  "/subjects/:idSubject/enrolled-students/:idStudent",
  function(req, res) {
    let subjectId = req.params.idSubject;
    let studentid = req.params.idStudent;
    console.log(`>>>`, subjectId);

    models.SubjectStudent.update(
      {
        score: req.body.score
      },
      { where: { StudentId: studentid } }
    )
      .then(data => {
        res.redirect(`/subjects/${subjectId}/enrolled-students`);
      })
      .catch(err => {
        res.send(err);
      });
  }
);
module.exports = subjectRoutes;
