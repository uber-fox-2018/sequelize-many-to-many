const router = require('express').Router();
const models = require ('../models');

router.use('/', (req, res) => {
  res.render('teachers/index')
})

module.exports = router;