const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({extended:true}));
const mongoClient = require('./db');


mongoClient(() => {
    app.listen(3000);
})