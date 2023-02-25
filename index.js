require('./java.js');
var http = require('http');
void async function NodeServer(){
await Java.loaded;

http.createServer(onRequest).listen(3000);

async function onRequest(req, res) {

  let path = req.url;
  switch (path) {

    case "/time":
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.end(await Java.Main("asdf"));
    case "/multiply":
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.end(await Java.multiply(20,25));
    default:
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.end('Java');
  }




}




}?.();