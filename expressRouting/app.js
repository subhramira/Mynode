const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const addProductRoute = require('./addProduct');
const getProductRoute = require('./getProduct');


app.use(bodyParser.urlencoded({extended:true}));

app.use(addProductRoute);
app.use(getProductRoute);

// for page not found

app.use((req,res,next) => {
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(3000);
