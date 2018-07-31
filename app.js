const express = require('express')
const app = express()
const routes = require('./routes')


app.set('view engine','ejs')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',routes)

app.listen((3000),function(){
    console.log('App listening on port 3000');
    
})