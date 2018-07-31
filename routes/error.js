const routes = require('express').Router();

routes.get('*', (req, res) => {
  res.render('error');
})

module.exports = routes;