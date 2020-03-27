
const inquirer = require('inquirer');



const printSelected=async(gameData,inputKeys)=>{
 
    inputKeys.forEach(key=>{
        console.log(`${key} :: ${gameData[key]}`)
    })

}


const printSelection = async games => {
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


module.exports={printSelected,printSelection}