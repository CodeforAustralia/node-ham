var express = require('express');
var router = express.Router();
var app = express();

start = function(){
  console.log("server up at 127.0.0.1:3003")
};
app.listen(3003, "127.0.0.1", 10, start);

route = router.get('/multiply/:rikkerikkerikke/', function(req, res){
    res.send("" + parseInt(req.params.rikkerikkerikke)*3);
});
app.use('/', route);

