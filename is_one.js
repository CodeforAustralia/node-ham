var express = require('express');
var router = express.Router();
var app = express();

start = function(){
  console.log("server up at 127.0.0.1:3004")
};
app.listen(3004, "127.0.0.1", 10, start);

route = router.get('/is_one/:n/', function(req, res){
    res.send(parseInt(req.params.n) === 1);
});
app.use('/', route);

