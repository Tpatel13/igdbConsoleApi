// application that allows uses the custom-module
// allows the user to search
// displays the search result list
// allows the user to select a result
// fetches detail by id (or some unique identifier)
// displays the fetched details cleanly

const igdb = require('igdb');
const inquirer = require('inquirer');

const _printOnConsole = async games => {
    // return a new array of objects where name is what is displayed to the user
    // and value is what is returned from the inquirer prompt
    const displayGames = games.map(card => {
        return { name: `${card.name}`,value:card.id};
    });

    // create an inquirer checkbox prompt
    return inquirer.prompt([
        {
            type: 'list',
            name: 'id',
            message: 'Please Select Game to get details',

            // display the cards to the user for them to select
            choices: displayGames,
        }
    ]);
};


const search=async (input)=>{
    //Fetching from Api with input and Stroring 
     const data=await igdb.search(input[1]);
     const selectedGameID=(await _printOnConsole(data)).id

    //Now Searching game by iD
    console.log(selectedGameID)
    const gameData=await igdb.searchByID(selectedGameID)

    console.log(gameData)
  
}


const searchByID=async (input)=>{
    
    //Fetch From Api with input ID


}

module.exports={search}