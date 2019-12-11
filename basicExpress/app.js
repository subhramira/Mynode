//import the core http module
var http = require('http');

//import express module.before import install the express
var express = require('express');

//create the app object
var app = express();

//middleware
app.use((req,res,next) => {
 console.log('in the middeleware');
 next(); // allows the request to continue to next middleware
});

app.use((req,res,next) => {
    console.log('in the second middeleware');
    res.send('<h3>Basic Express Example</h3>')
});

const server = http.createServer(app);
server.listen(3000);