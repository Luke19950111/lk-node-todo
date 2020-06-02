const { program } = require('commander');
const api = require('./index.js');

program
    .option('-x, --xxx', 'what is x')
program
    .command('add')
    .description('add a task')
    .action((source, destination) => {
      if(destination){
        let words = destination.join(' ')
        api.add(words)
      }else{
        console.log("error: missing required argument 'taskName'")
      }
    });
program
    .command('clear')
    .description('clear all tasks')
    .action((source, destination) => {
      console.log('this is clear.')
    });
 

program.parse(process.argv);
