const http = require('http');
const fs = require('fs');
http.createServer((req,res)=>{
    // Asynchronous Method
    fs.readFile("text/read.txt","utf-8",(err,data)=>{
        if(err){
            res.writeHead(500,{"content-type":"text/plain"})
            res.end("Internal Server Error");
        }else{
            res.setHeader("content-type","text/html");
            res.write(data);
            res.end("File read Successfully");
        }
    })
    
    // synchronous method
    /*
    let data = fs.readFileSync("text/read.txt","utf-8");
    res.setHeader("content-type","text/html");
    res.write(data);
    res.end();
    */
    
}).listen(7000,()=>{
    console.log("server running at http://localhost:7000/");
});