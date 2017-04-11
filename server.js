'use strict';

// const http = require('http');

// http.createServer(function(req, res) => {
//   res.writeHead(200, {
//     'Content-Type': 'text/plain'
//   });
//   res.end('Hello World');
// //   res.write('Hello hien');
// //   res.end();
// }).listen(3000);


// console.log('Server running at http://localhost:3000/');


const connect = require('connect');
const app = connect();

function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
};


function helloWorld(req, res, next) {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
};
app.use(logger);
app.use('/helloworld',helloWorld);

app.listen(3000); 
console.log('Server running at http://localhost:3000/');