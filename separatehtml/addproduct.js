const express = require('express');
//path is a default module of nodeJs for providing path
const path = require('path');

const router = express.Router();
  
router.get('/addproduct', (req,res,next) => {
    /**
     * sendFile is used to render a file
     * path.join is used for provide path of file
     * __dirname used for rootfoldername.In that folder goto view and inside view go addproduct.html
     */
    res.sendFile(path.join(__dirname, 'view', 'addproduct.html'))

})

router.post('/product', (req,res,next) => {
    console.log('pp', req.body);
    res.redirect('/');
})

module.exports = router