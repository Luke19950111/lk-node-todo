const homedir = require('os').homedir();
const home = process.env.HOME || homedir;
const fs = require('fs')
const p = require('path');
const dbPath = p.join(home, '.todo')

module.exports.add = (title) => {
    fs.readFile(dbPath, {flag: 'a+'}, (error, data)=>{
        let list
        try{
            console.log(21)
            list = JSON.parse(data.toString())
        }catch(error2){
            console.log(22)
            list = []
        }
        let task = {
            title:　title,
            done: false
        }
        list.push(task)
        const string = JSON.stringify(list)
        fs.writeFile(dbPath, string, (error3)=>{
            if(error3){console.log(error3)}
        })
    })
}