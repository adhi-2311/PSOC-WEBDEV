var http = require("http")
var fs = require('fs')

var server = http.createServer(someCallbackFunction)

server.listen(5000,function(err){
    if(err) {
        console.log("ERROR",err)
    }
    else {
        console.log("Server on port 5000")
    }
});

function someCallbackFunction(req,res){
    if(req.url == '/') {
        res.write("yes working on /")
        res.end()
    }
    else if(req.url == '/html') {
        res.writeHead(200, {'Content-Type':'text/HTML'} );
        fs.readFile('index.html',function(err,data){
            if(err) {
                res.writeHead('404');
                res.write('404 fd')
            }
            else
            {
                res.write(data);
            }
            res.end()
        })
    }
    else
    {
        res.writeHead('404');
        res.write("404 lost")
    }
}