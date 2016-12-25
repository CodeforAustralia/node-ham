// places.js

var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
    res.send("Hello NodeJS");
});

router.get('/is_one/:n/', function(req, res){
    res.send(parseInt(req.params.n) === 1);
});

//export this router to use in our index.js
module.exports = router;
