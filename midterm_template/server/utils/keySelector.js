const inquirer=require('inquirer')
const keySelector=async(gameData)=>{
    
    // return a new array of objects where name is what is displayed to the user
    // and value is what is returned from the inquirer prompt
   
    let keys=[];
    for (const key in gameData[0]) {
        keys.push(key)
      }
    
    // create an inquirer checkbox prompt
    return inquirer.prompt([
        {
            type: 'checkbox',
            name: 'keys',
            message: 'Please Select Details that you want to filter',

            // display the cards to the user for them to select
            choices: keys,
        }
    ]);
}

module.exports={keySelector}