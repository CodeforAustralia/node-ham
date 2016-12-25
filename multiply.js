var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send("Hello NodeJS");
});

router.get('/multiply/:rikkerikkerikke/', function(req, res){
    res.sendStatus(parseInt(req.params.rikkerikkerikke)*3);
});

//export this router to use in our index.js
module.exports = router;