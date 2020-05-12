// CLI using yargs for search command
// ex: node cli.js search -k keyword
var cors = require('cors');

// use it before all route definitions
const express = require('express');
const log4js = require('log4js');
log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'logs.log' } },
  categories: { default: { appenders: ['cheese'], level: 'info' } }
});


const app = express()

const port = 8081

app.use(cors());


const apiRoutes = require('./routes');

app.use('/', apiRoutes);



app.listen(port, () => console.log(`App listening at http://localhost:${port}`))