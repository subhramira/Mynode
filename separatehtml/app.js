const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const addProductRoute = require('./addproduct');
const productRoute = require('./product');

const app = express();
app.use(bodyParser.urlencoded({'extended':true}));
app.use(express.static(path.join(__dirname,'css')))

app.use(addProductRoute);
app.use(productRoute);

app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname, 'view', 'pagenotfound.html'));
})

app.listen(3003);