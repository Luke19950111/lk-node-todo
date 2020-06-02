const { program } = require('commander');
const api = require('./index.js');
const pkg = require('./package.json')

program
    .version(pkg.version)
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
    .action(() => {
      api.clear()
    });
 

program.parse(process.argv);
console.log(process.argv)


if(process.argv.length === 2){
  //说明直接运行 node cli.js
  console.log(1)
    api.showAll()
}
