// CLI using yargs for search command
// ex: node cli.js search -k keyword
const yargs = require('yargs');
const app = require('./app.js');

const log4js = require('log4js');
log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'logs.log' } },
  categories: { default: { appenders: ['cheese'], level: 'info' } }
});
 
const logger = log4js.getLogger('CLI');


yargs
    .usage('$0: Usage <cmd> [options]')
   
    .command({
        command: 'search',
        desc: 'search Game by name --Limit for the search limit Default is 2 ',
        handler: argv => {
            app.search(argv).catch(e=>{
                logger.error("Wrong Input By User")
                console.error("No games found Please check Input",e)});
        }
    }).command({
        command: 'id',
        desc:'Get game details by id',
        handler:argv=>{
          app.searchByID(argv).catch(e=>{
            logger.error("Wrong Input By User")
            console.error("No games found Please check Input",e)});
         }
    })

    // add a help menu to assist the user in understanding our CLI
    .help('help').argv;

