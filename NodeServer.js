const http = require('http');
const fs = require('fs');
const url = require('url');

//const hostname = '127.0.0.1';
const port = 3000;

    const server = http.createServer((req , res) =>{
      //res.statusCode = 200;
      const q = url.parse(req.url, true);
      let filename = '.' + q.pathname;
      console.log(req.url);
      fs.readFile( filename, function(err, data){
        if(err){
          res.writeHead(404, {'Content-type' : 'text/html'});
          return res.end('404 NOT FOUND');
        }
        if(req.url.includes('.css')){
          res.writeHead(200, {'Content-type' : 'text/css'});
          res.write(data);
          res.end();
        else if(req.url.includes('.js')){
          res.writeHead(200, {'Content-type' : 'application/javascript'});
          res.write(data);
          res.end();
        }
        }else {
          res.writeHead(200, {'Content-type' : 'text/html'});
          res.write(data);
          res.end();
        }
      });
      /*fs.readFile( filenameCss, function(err, data){
        if(err){
          res.writeHead(404, {'Content-type' : 'text/html'});
          return res.end('404 NOT FOUND');
        }
        res.writeHead(200, {'Content-type' : 'text/css'});
        res.write(data);
        res.end();
      });*/
    }).listen(3000);

    /*server.listen(port, hostname, () => {
      console.log('Server started on port ' +port);
    });*/
