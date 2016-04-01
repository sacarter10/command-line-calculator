const parser = require("./arithmetic-parser.js");
const readline = require('readline');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.setPrompt('Calculate? ');
rl.prompt();

rl.on('line', (line) => {
  switch(line.trim()) {
  	case "exit":
  		process.exit(0);
    default:
      console.log(parser.parse(line.trim()));
      break;
  }
  rl.prompt();
}).on('close', () => {
  process.exit(0);
});