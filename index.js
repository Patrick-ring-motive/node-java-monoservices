require('./monoservices/java/java.js');
require('./lib/voidImports.js');
const http = require('http');

void async function NodeServer() {
  await imports();


  http.createServer(onRequest).listen(3000);

  console.log('Server listening on port 3000');

  async function onRequest(req, res) {

    let path = req.url;
    switch (path) {

      case "/time":
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.end(await Java.Main("asdf"));
        break;
      case "/multiply":
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.end(await Java.multiply(20, 25));
        break;
      default:
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.end('Java');
        break;
    }




  }




}?.();