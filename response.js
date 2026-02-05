const http = require('http');
var age = 23;
const PORT = 4800;
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.write(`
            <html>
                <head>
                    <title>Node js response page</title>
                </head>
                <body>
                    <h1>Age is ${age}!! h1 tag</h1>
                    <h2>Time : ${new Date()}!! h2 tag</h2>
                    <h3>Hello World!! h3 tag</h3>
                    <h4>Hello World!! h4 tag</h4>
                    <h5>Hello World!! h5 tag</h5>
                    <img src="./node-2026/assets/sumant_img2.png" height="auto" wodth="auto">
                </body>
            </html>
        `);
        res.end();
        //process.exit(); // it will stop the server need to restart
});
server.listen(PORT,()=>{
    console.log(`server running at http://localhost:${PORT}`);
});