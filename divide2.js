var express = require('express');
var router = express.Router();
var app = express();

start = function(){
  console.log("server up at 127.0.0.1:3002")
};
app.listen(3002, "127.0.0.1", 10, start);

route = router.get('/divide/:n/', function(req, res){
    res.sendStatus(parseInt(req.params.n)/2);
});
app.use('/', route);

