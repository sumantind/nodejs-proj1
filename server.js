const http = require('http');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    res.write('This server is running at 2300 port \n');
    res.write('This server is running at 2300 port by nodemon \n');
    res.end('Hello World!!');
});

const PORT = 2300;
server.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}/`);
})