const express = require('express');
const app = express();

const indexRoutes = require('./routes/index');
const teacherRoutes = require('./routes/teachers');
const subjectRoutes = require('./routes/subjects');
const studentRoutes = require('./routes/students');
const errorRoutes = require('./routes/error');

app.set("view engine", "ejs");
app.use(express.static("public")); 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(indexRoutes);
app.use(teacherRoutes);
app.use(subjectRoutes);
app.use(studentRoutes);
app.use(errorRoutes);
app.listen(3000, () => { console.log("Server has started!!")});