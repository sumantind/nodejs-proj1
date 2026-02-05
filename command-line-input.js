const http = require('http');
//nodemon command-line-input.js 2345 -> run this cmd to check this code
const arg = process.argv;
const PORT = arg[2];
console.log(PORT);
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/plain');
    res.write("Taking input from CMD : "+PORT);
    res.end();
});

server.listen(PORT);