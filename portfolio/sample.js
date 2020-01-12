

var http = require('http');
var fs = require('fs');

var server = http.createServer(requestHandler);

function requestHandler(req, res) {
  // handle all html file together
  if(req.url === '/'|| req.url === "/home") {
    // set appropriate headers
    res.setHeader('Content-Type', 'text/html')
    // read file and send chunked data in response
    fs.createReadStream(__dirname + '/index.html' ).pipe(res);
  }
  else if(req.url === '/about') {
    // set appropriate headers
    res.setHeader('Content-Type', 'text/html')
    // read file and send chunked data in response
    fs.createReadStream(__dirname + '/about.html' ).pipe(res);
  } 
   else if(req.url.includes('css')) {
    //handle css file here
    // first set headers ie. 'text/css'
    res.setHeader('Content-Type', 'text/css')
    // read css file and send it in response using createReadStream
    fs.createReadStream(__dirname + '/assets/stylesheet/style.css' ).pipe(res);
    // for handling images
  } else if(['png', 'jpg', 'jpeg'].indexOf(req.url.split('.').pop())>-1) {
    //send images here with appropraite content type
    var img = req.url.split('.').pop()
    res.setHeader('Content-Type', `image/${img}`)
    fs.createReadStream(__dirname + req.url ).pipe(res);
  }
  else {
    res.statusCode = 400;
    res.end('Page not found')
  }
}

server.listen(9000);
