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
    const {limit=20,_,sort=false}=input

    let  timePerformance=new Date().getMilliseconds();
    //Fetching from Api with input and Stroring 
    const data=await igdb.search(_[1],limit);
   
    logger.info(`Responce Time of search ${(new Date().getMilliseconds())-timePerformance}`)

    //Validation of response 
    if (validator.nullDataValidaor(data)) throw new Error
    
    //Selection of Fatched games 
    const selectedGameID=(await printUtil.printSelection(data)).id

    //Now Searching game by iD
    const gameData=(await igdb.searchByID(selectedGameID))
    
    //Printing All the fields and getting Input from the user 
    const key=await selector.keySelector(gameData)
    
    //Printing on console
    printUtil.printSelected(gameData[0],key.keys)
    
    logger.info("Success Fully Completed")
}


const searchByID=async(gameID)=>{
 
    //Input Validation
    if(validator.numberValidator(gameID._[1]))throw new Error


    let  timePerformance=new Date().getMilliseconds();

    //Fatching data
    const data=await igdb.searchByID(gameID._[1])
     
    logger.info(`Responce Time of search By ID ${(new Date().getMilliseconds())-timePerformance}`)

    //Checkig for empty data responce 
    if (validator.nullDataValidaor(data)) throw new Error
    
    //Printing data
    console.log(data)
}



module.exports={search,searchByID}