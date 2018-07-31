const express = require('express')
const app = express()

const routesIndex = require('./routes/index')

app.locals.convertScore = require('./helpers/convertScore')

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', routesIndex)

app.listen(3030, () => {
  console.log('Listening on port http://localhost:3030')
})