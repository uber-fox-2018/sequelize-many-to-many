const express = require('express')
const app = express()
const routes = require('./routes')


app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.locals.message = null

app.use('/',routes)


app.listen(3000,function(){
    console.log('listenin gon 3000');
    
})