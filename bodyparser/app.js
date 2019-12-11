const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//parse the body of the url
app.use(bodyParser.urlencoded({extended:true}));

app.use('/addemployee', (req,res,next)=> {
    res.send('<form action="/employee" method="POST"><input type="text", name="ename"><button type="submit">ADD</button></form>')
})

app.use('/employee', (req,res,next) => {
    console.log(req.body);
    res.redirect('/');

})

app.use('/', (req,res, next) => {
    res.send('<h3>Employee added sucessfully</h3>')
});

app.listen(3000);