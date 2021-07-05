const home = require("express").Router();


const ejs = require("ejs");
const Model = require("../models");

home.get("/", (req, res) => {
  res.render("index");
});

module.exports = home
