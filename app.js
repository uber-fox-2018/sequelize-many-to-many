const app = require("express")();
const express = require("express");
const routes = require("./routes");
const body = require("body-parser");
const GradeHelper = require("./helpers/mainhelper.js");

app.use((req,res,next)=>{
	res.locals.helper = GradeHelper;
	next();
});

app.use(body.urlencoded({extended:true}));
app.use(body.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", routes);

app.listen(3000);