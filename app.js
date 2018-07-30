"use strict";
const express = require("express");
const app = express();




const path = require("path");
var port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
const home = require('./routes/home');
const teacherRoutes = require('./routes/teacherRoutes');
const studentRoutes = require('./routes/studentRoutes');
const subjectRoutes = require('./routes/subjectRoutes');

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./public")));

// app.get("/", (req, res) => res.send("Hello World!"));
app.use('/', home);
app.use('/', studentRoutes);
app.use('/', teacherRoutes);
app.use('/', subjectRoutes);





app.listen(port, () => {
  console.log(`server is connecting to port ${port}....`);
});

module.exports = app;
