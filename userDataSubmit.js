const queryString = require('querystring');
function userDataSubmit(req,res){
    let dataBody = [];
    req.on('data',(chunk)=>{
        dataBody.push(chunk);
    });
    req.on('end', ()=>{
        let rawData = Buffer.concat(dataBody).toString();
        var readableData = queryString.parse(rawData);
        let dataString = `My name is : ${readableData.name}, and my Email Id is : ${readableData.email}`;
        console.log(dataString);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(dataString);
    });
    
}
module.exports = userDataSubmit;