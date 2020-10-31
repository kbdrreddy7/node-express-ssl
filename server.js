const https = require('https');
const fs = require('fs');

/* const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

https.createServer(options, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(8000);
 */


// for express

// in place of app pass express app

var key  = fs.readFileSync('server.key'); //key.key  // key.pem
var cert = fs.readFileSync('server.crt');  //crt.crt // cert.pem 
// .crt --> given by CA authority / selft signed .crt

/* var ca1 = fs.readFileSync('/etc/ssl/mvbr/gdroot-g2.crt')
var ca2 = fs.readFileSync('/etc/ssl/mvbr/gd_bundle-g2-g1.crt')
 */

var credentials = {key, cert,passphrase:"givePassword"};
//var credentials = {key, cert,ca:[ca1,ca2],passphrase:'givePassword'}



/* const httpsPort=process.env.HTTPS_PORT || 443
var httpsServer = https.createServer(credentials, app); 
   httpsServer.listen(httpsPort);
 */

//   -----------------------or 
https.createServer(credentials, function (req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(8000);




 