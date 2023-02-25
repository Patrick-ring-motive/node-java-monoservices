require('./java.js');
var http = require('http');


http.createServer(onRequest).listen(3000);

async function onRequest(req, res) {
  let path = req.url;



  switch (path) {

    case "/fetch":

    default:
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.end('cheese');
  }




}

function getHeader(reqs, str) {
  str = str.toLowerCase();
  let h = reqs.rawHeaders;
  const h_length = h.length;
  for (let i = 0; i < h_length; i++) {

    h[i] = h[i].toLowerCase();

  }
  let i = h.indexOf(str) + 1;
  return h[i];
}