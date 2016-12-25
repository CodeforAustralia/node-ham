
var express = require('express');
var router = express.Router();

router.get('/increment/:n/', function(req, res){
    res.sendStatus(parseInt(req.params.n)+1);
});

//export this router to use in our index.js
module.exports = router;
