var express = require('express');
var router = express.Router();
var app = express();

start = function(){
  console.log("server up at 127.0.0.1:3001")
};
app.listen(3001, "127.0.0.1", 10, start);

route = router.get('/increment/:n/', function(req, res){
    res.sendStatus(parseInt(req.params.n)+1);
});
app.use('/', route);

