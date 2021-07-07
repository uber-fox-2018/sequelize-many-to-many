'use strict'

const app = require('express')()
const bodyParser = require('body-parser')
const routes = require('./routes')

const port = 4545

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/', routes)

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
})