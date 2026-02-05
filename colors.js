const colors = require('colors');
colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'bgBrightRed'
});
console.log(colors.error("Hello World!! This is red Color!"));
console.log(colors.help("Hello World!! This is green Color!"));
console.log(colors.cyan("Hello World!! This is blue Color!"));
console.log(colors.magenta("Hello World!! This is background white Color!"));
console.log(colors.bgGreen("Hello World!! This is background white Color!"));
console.log(colors.gray("Hello World!! This is background white Color!"));