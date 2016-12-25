var express = require('express');
var router = express.Router();

router.get('/multiply/:rikkerikkerikke/', function(req, res){
    res.sendStatus(parseInt(req.params.rikkerikkerikke)*3);
});

//export this router to use in our index.js
module.exports = router;
