const express = require('express');
const router = express.Router();

router.get('/addproduct',(req,res,next) => {
    res.send(`<form action="/product" method="POST"><input type="text" name="pname"><button type="submit">ADD</button></form>`)
})

router.post('/product', (req,res,next) => {
    console.log('pname', req.body);
    res.redirect('/');
})

module.exports = router;