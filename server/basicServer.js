var http = require('http');
var url = require('url')

// 1. Write script to create a basic http server using createServer method, write 'Welcome to NodeJS' as response and
// listen for request on port 5555.
http.createServer((req,res)=>{
  res.write("Welcome to NodeJs")
  res.end()
}).listen(5555,()=>{
  console.log('Running at 5555')
})
// 2. Write script to create a server, send in response the request headers 
// and add listener on port 6666.
http.createServer((req, res)=>{
  console.log(req.headers)
  var head = JSON.stringify(req.headers)
  res.end(head)
}).listen(3001, ()=>{
  console.log('Running at 3001')
})
// 3. create a server and console request methods and url by doing request 
// from postman or web browsers.
http.createServer((req, res)=>{
  console.log(req.headers)
  console.log(req.url)
  res.end('Request made to port 3002')
}).listen(3002, ()=>{
  console.log('Running at 3002')
})
// 4. create a server
// - set response headers as 'text/html' using res.setHeader property.
// - write some HTML content in response
// - listen on port 6000
http.createServer((req, res)=>{
  res.setHeader('Content-type', 'text/html')
  res.end('Request at 6000')
}).listen(6000, ()=>{
  console.log('Running at 6000')
})
// 5. create a server
// - create a seperate file index.html and write some html content
// - read the html file content and send it in response in createServer method
// - don't forget to set header before writing to response
http.createServer((req, res)=>{
  fs.readFile('./index.html', (err, data)=>{
    if (err) return res.end(err)
    res.setHeader('Content-type', 'text/html')
    res.end(data)
  })
}).listen(6001, ()=>{
  console.log('Running at 6001')
})
// 6. create a server
// - create 3 diffenrent file ie. indx.html, about.html, contact.html
// - inside createServer, handle different urls for serving different html file
// - '/' route for index.html file
// - "/about" for about.html file
// - "/contact" for contact.html file
http.createServer((req, res)=>{
  if (req.url === '/') {
    fs.readFile('./index.html', (err, data)=>{
      if (err) return res.end(err)
      res.setHeader('Content-type', 'text/html')
      res.end(data)
    })
  } else if (req.url === '/about') {
    fs.readFile('./about.html', (err, data)=>{
      if (err) return res.end(err)
      res.setHeader('Content-type', 'text/html')
      res.end(data)
    })
  } else if (req.url === '/contact') {
    fs.readFile('./contact.html', (err, data)=>{
      if (err) return res.end(err)
      res.setHeader('Content-type', 'text/html')
      res.end(data)
    })
  }
}).listen(6002, ()=>{
  console.log('Running at 6002')
})
// 7. create an Server(echoServer)
// handle post request for incoming data from postman using req as eventEmitter
// send incoming data back in response
http.createServer((req, res)=>{
  console.log(req.url)
  var urlStore = qs.parse(req.url)
  console.log(urlStore)
  var store = ''
  req.on('data', (chunk)=>{
    store = store + chunk
  })
  req.on('end', ()=>{
    res.setHeader('Content-type', 'application/json')
    res.end(store)
    console.log(store)
  })
}).listen(6003, ()=>{
  console.log('Running at 6003')
})
// 8. create a server
// handle json data from postman
// parse the json data
// send json data back in response
http.createServer((req, res)=>{
  var store = ''
  req.on('data', (chunk)=>{
    store = store + chunk
  })
  req.on('end', ()=>{
    res.setHeader('Content-type', 'application/json')
    res.end(store)
    console.log(store)
  })
}).listen(6004, ()=>{
  console.log('Running at 6004')
})
// 9. create a server
// handle x-www-urlencoded(form data) coming form postman
// parse form-data using querystring module
// send data back in response
http.createServer((req, res)=>{
  var store = ''
  req.on('data', (chunk)=>{
    store = store + chunk
  })
  req.on('end', ()=>{
    res.setHeader('Content-type', 'application/json')
    var qsParsed = qs.parse(store)
    console.log(qsParsed)
    res.end(JSON.stringify(qsParsed))
    console.log(store)
  })
}).listen(6005, ()=>{
  console.log('Running at 6005')
})
// 10. create a server and add listener on port 7000
// send get request on 'http://localhost:7000/new?username=altcampus' from postman or browser
// parse the request url using 'url' core node module
// extract protocol, path and pathname, query from the request
// send path in response
http.get('http://localhost:7000/new?username=altcampus', (res)=>{
  var parsedURL = url.parse(res.url)
  console.log(parsedURL)
  var store = ''
  res.on('data', (chunk)=>{
    store += chunk
  })
  res.on('end', ()=>{
    console.log(store);
    res.end(parsedURL)
  })
}).on('error', (err)=>{
  console.log(err);
})
// 11. Write script to create an absolute and relative path of 'theory.md' from the current file.
  // use path module from core node
  const path = require('path')
  // var absolutePath = './theory.md'
  var absolute = path.join(__dirname + '/theory.md')
  var relative = './theory.md'
  console.log(absolute)
  console.log(relative)