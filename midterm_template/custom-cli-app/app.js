// application that allows uses the custom-module
// allows the user to search
// displays the search result list
// allows the user to select a result
// fetches detail by id (or some unique identifier)
// displays the fetched details cleanly

const igdb = require('igdb');
const validator=require('./utils/validator')
const selector=require('./utils/keySelector')
const printUtil=require('./utils/printUtil')

const log4js = require('log4js');
log4js.configure({
  appenders: { cheese: { type: 'file', filename: 'logs.log' } },
  categories: { default: { appenders: ['cheese'], level: 'info' } }
});
 
const logger = log4js.getLogger('APP');



const search=async (input)=>{

    //Object Destrcturing with default limit 20 
    const limit=20;

    
    //Fetching from Api with input and Stroring 
    const data=await igdb.search(input,limit);
   
   
    //Validation of response 
    if (validator.nullDataValidaor(data)) throw new Error
    

    logger.info("Success Fully Completed")

    return data;
  }


const searchByID=async(gameID)=>{

    //Input Validation
    if(validator.numberValidator(gameID))throw new Error


    let  timePerformance=new Date().getMilliseconds();

    //Fatching data
    const data=await igdb.searchByID(gameID)
     

    logger.info(`Responce Time of search By ID ${(new Date().getMilliseconds())-timePerformance}`)

    //Checkig for empty data responce 
    if (validator.nullDataValidaor(data)) throw new Error
    
return data}



module.exports={search,searchByID}