var express = require('express');
var router = express.Router();

router.get('/is_one/:n/', function(req, res){
    res.send(parseInt(req.params.n) === 1);
});

module.exports = router;
