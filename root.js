const http = require('http');
const userDataSubmit = require('./userDataSubmit');
const userForm = require('./userForm');
http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{"content-type":"text/html"});
        userForm(req,res);
    }else if(req.url=="/submit"){
        userDataSubmit(req,res);
    }
}).listen(7100,()=>{
    console.log("server running at http://localhost:7100/");
})