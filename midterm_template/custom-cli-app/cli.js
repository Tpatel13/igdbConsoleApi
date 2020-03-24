// CLI using yargs for search command
// ex: node cli.js search -k keyword
const yargs = require('yargs');
const app = require('./app.js');

yargs
    .usage('$0: Usage -<cmd> [options]')
   
    .command({
        command: 'search',
        desc: 'search Game by name ',
        handler: argv => {
            app.search(argv._);
        }
    }).command({
        command:'id',
        desc:'Get game details by id',
        handler:argv=>{
        console.log("ID is seleced")
         }
    })

    // add a help menu to assist the user in understanding our CLI
    .help('help').argv;

