const fs = require('fs');

// to create new file
// fs.writeFileSync("files/banana3.txt","this is a fruit");

// To read the content of the file
// const data = fs.readFileSync("files/banana.txt","utf-8");
// console.log(data);

// To add the content in file
// fs.appendFileSync("files/banana.txt","This is banana");

//To delete the file
// fs.unlinkSync("files/banana2.txt");

//to get the input from terminal
var terminalInput = process.argv;
// to get specific input terminalInput[2] 0 & 1 is reserved
console.log(terminalInput)


