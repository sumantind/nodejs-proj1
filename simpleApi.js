const http = require('http');
const userData = [
    {
        name: 'sumant',
        age: 20,
        email: 'sumant@gmail.com'
    },
    {
        name: 'Sujeet',
        age: 22,
        email: 'sujeet@gmail.com'
    },
    {
        name: 'sumit',
        age: 24,
        email: 'sumit@gmail.com'
    },
    {
        name: 'Amit',
        age: 30,
        email: 'Amit@gmail.com'
    },

];
const server = http.createServer((req, res) => {
    // res.setHeader('Content-Type', 'application/json');
    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
        'X-Custom-Header': 'MyValue',
        'Content-Language':'en',
        'Last-Modified': new Date().toUTCString(),
        'Set-Cookie': 'username=sumant; Max-Age=3600; HttpOnly',
    });
    
    if(req.url=='/'){
        res.write(JSON.stringify(userData));
    }else if(req.url=='/login'){
        res.write('Login Page !!');
    }else{
        res.write('Page does not exists');
    }
    res.end();
});
server.listen(6100, () => {
    console.log(`server running at http://localhost:6100/`);
})