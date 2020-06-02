const { program } = require('commander');

program
    .option('-x, --xxx', 'what is x')
program
    .command('add')
    .description('add a task')
    .action((source, destination) => {
      console.log(destination);
      let words = destination.join(' ')
      console.log(words)
    });
program
    .command('clear')
    .description('clear all tasks')
    .action((source, destination) => {
      console.log('this is clear.')
    });
 

program.parse(process.argv);

console.log(program.xxx)