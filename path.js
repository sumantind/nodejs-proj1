const path = require('path');
const file = "text/sita.txt";

console.log(path.dirname(file)); // give directory name of the file
console.log(path.basename(file)); // give the name of the file
console.log(path.extname(file)); // give the extension name of the file

console.log(path.resolve("text","sita.txt")); // give the full path of the file
console.log(path.isAbsolute(file)); // give true and false 
console.log(__dirname); // give full path of the file directory
console.log(__filename); // give full path of the file

