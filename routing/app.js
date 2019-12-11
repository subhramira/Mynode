var http = require('http');
const express = require('express');
const app = express();
app.use('/route2', (req,res, next) => {
    res.send('<h3>Route 2</h3>')
});
app.use('/', (req,res, next) => {
    res.send('<h3>Route 1</h3>')
});



app.listen(3030);