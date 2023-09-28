const express = require('express');
const router = express.Router();

router.get('/', async (req,res) =>{

    //console.log("Hola")
    res.render('index.ejs');
        
});

module.exports = router;