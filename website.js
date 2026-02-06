const http = require("http");
const fs = require('fs');
const PORT = 3100;
http.createServer((req,res)=>{
    let file = "/home";
    if(req.url != "/"){
        file = req.url;
    }

    if(req.url != "/style.css"){
        // load headerData
        let headerData = fs.readFileSync("./html/header.html","utf-8");
        let footerData = fs.readFileSync("./html/footer.html","utf-8");

        fs.readFile("./html"+file+".html","utf-8",(err,data)=>{
            if(err){
                res.writeHead(500,{"content-type":"text/plain"});
                res.end("Internal Server Error");
            }else{
                res.writeHead(200,{"content-type":"text/html"});
                res.write(`${headerData} ${data} ${footerData}`);
                res.end();
            }
        });
    }else if(req.url=="/style.css"){
        fs.readFile("./html/style.css","utf-8",(err,data)=>{
            if(err){
                res.writeHead(500,{"content-type":"text/plain"});
                res.end("style.css not found");
            }else{
                res.writeHead(200,{"content-type":"text/css"});
                res.write(data);
                res.end();
            }
        });
    }
}).listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`)
});