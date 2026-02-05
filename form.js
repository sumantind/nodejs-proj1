const http = require('http');
const fs = require('fs');
const queryString = require('querystring');
http.createServer((req,res)=>{
    fs.readFile('html/form.html','utf-8',(err,data)=>{
        if(err){
            res.writeHead(500,{'Content-Type':'text/plain'});
            res.end('Internal Server error');
        }else{
            res.writeHead(200,{'content-type':'text/html'});
            if(req.url=='/'){
                res.write(data);
            }else if(req.url=='/submit'){
                let dataBody = [];
                req.on('data',(chunk)=>{
                    dataBody.push(chunk);
                });
                req.on('end', ()=>{
                    let rawData = Buffer.concat(dataBody).toString();
                    var readableData = queryString.parse(rawData);
                    console.log(readableData);
                    let dataString = `My name is : ${readableData.name}, and my Email Id is : ${readableData.email}`;
                    // create file using sync method
                    // fs.writeFileSync("text/"+readableData.name+".txt",dataString);
                    // console.log("File created successfully");

                    // create file using async method
                    fs.writeFile("text/"+readableData.name+".txt",dataString,"utf-8",(err)=>{
                        if(err){
                            res.end("internal server error");
                            return false;
                        }else{
                            console.log("File created Successfully");
                        }
                    })
                });
                res.write("<h1>Form Submitted Successfully</h1>");
            }
            res.end()
        }
    })
}).listen(6900);