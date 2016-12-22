// places.js

var express = require('express');
var router = express.Router();

// MiddleWare
router.get('*', function(req, res, next){
	console.log("Get at " + Date.now());
	console.log("   req " + req);
	console.log("   res " + res);
	next();
});


router.get('/', function(req, res){
    res.send("Hello NodeJS");
});

router.get('/increment/:n/', function(req, res){
    res.sendStatus(parseInt(req.params.n)+1);
});

//export this router to use in our index.js
module.exports = router;
