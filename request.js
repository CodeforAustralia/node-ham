var http = require('http');

var options = {
  host: 'localhost',
  port: 3000,
  path: '/increment/5'
};

http.get(options, function(resp){
  resp.on('data', function(chunk){
    //do something with chunk
    console.log("Got: " + chunk)
  });
}).on("error", function(e){
  console.log("Got error: " + e.message);
});
