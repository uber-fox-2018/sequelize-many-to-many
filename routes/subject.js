const router = require('express').Router();
const models = require ('../models');

router.use('/', (req, res) => {
  res.render('subjects/index')
})

module.exports = router;