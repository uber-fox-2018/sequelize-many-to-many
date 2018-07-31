const app = require('express')();
const urlencoded = require('body-parser').urlencoded({extended:true})
const routes = require('./routes')

app.use(urlencoded)
app.use('/',routes)

app.listen(8080,()=>{
    console.log('silahkan akses localhost:8080');
});