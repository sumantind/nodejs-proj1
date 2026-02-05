console.log("Hello World!!");
var fs = require('fs');
var os = require('os');
fs.writeFileSync('sumant.txt','My Name is Sumant');
console.log(os.platform()); // give on which operating system my System is running
console.log(os.hostname()); // give the system name
console.log(process.cwd()); // give the actual path of this file
console.log(process.pid); // give the process id