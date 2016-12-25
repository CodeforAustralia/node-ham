var express = require('express');
var router = express.Router();

router.get('/is_even/:n/', function(req, res){
    res.sendStatus(parseInt(req.params.n)%2);
});

module.exports = router;
