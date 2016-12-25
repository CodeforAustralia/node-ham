var http = require('http');

var options = {
  host: 'localhost',
  port: 3001,
  path: '/increment/5'
};
http.get(options, function(resp){
  resp.on('data', function(chunk){
    //do something with chunk
    console.log("inc 5 Got: " + chunk)
    return chunk
  });
}).on("error", function(e){
  console.log("Got error: " + e.message);
});

var options2 = {
  host: 'localhost',
  port: 3002,
  path: '/divide/10'
};
http.get(options2, function(resp){
  resp.on('data', function(chunk){
    //do something with chunk
    console.log("div 10 Got: " + chunk)
    return chunk
  });
}).on("error", function(e){
  console.log("Got error: " + e.message);
});

var options3 = {
  host: 'localhost',
  port: 3003,
  path: '/multiply/5'
};

http.get(options3, function(resp){
  resp.on('data', function(chunk){
    //do something with chunk
    console.log("mult 5 Got: " + chunk)
    return chunk
  });
}).on("error", function(e){
  console.log("Got error: " + e.message);
});


var options4 = {
  host: 'localhost',
  port: 3004,
  path: '/is_one/4'
};
http.get(options4, function(resp){
  resp.on('data', function(chunk){
    //do something with chunk
    console.log("is1 4 Got: " + chunk)
    return chunk
  });
}).on("error", function(e){
  console.log("Got error: " + e.message);
});


var options5 = {
  host: 'localhost',
  port: 3005,
  path: '/is_even/2'
};
http.get(options5, function(resp){
  resp.on('data', function(chunk){
    //do something with chunk
    console.log("even 5 Got: " + chunk)
    return chunk
  });
}).on("error", function(e){
  console.log("Got error: " + e.message);
});


var options6 = {
  host: 'localhost',
  port: 3030,
  path: '/x3_and_one/7'
};
http.get(options6, function(resp){
  resp.on('data', function(chunk2){
    //do something with chunk
    console.log("x3+1 Got: " + chunk2)
    return chunk2
  });
}).on("error", function(e){
  console.log("Got error: " + e.message);
});


