const express = require('express');
//path is a default module of nodeJs for providing path
const path = require('path');

const router = express.Router();
  
router.get('/', (req,res,next) => {
    /**
     * sendFile is used to render a file
     * path.join is used for provide path of file
     * __dirname used for rootfoldername.In that folder goto view and inside view go addproduct.html
     */
    res.sendFile(path.join(__dirname, 'view', 'product.html'))

})

module.exports = router