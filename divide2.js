var express = require('express');
var router = express.Router();

router.get('/divide/:n/', function(req, res){
    res.sendStatus(parseInt(req.params.n)/2);
});

//export this router to use in our index.js
module.exports = router;
