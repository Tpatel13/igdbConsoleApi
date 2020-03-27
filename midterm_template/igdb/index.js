// Export a method for API search
// Export a method for API fetch
// This are most likely 2 different URLs (one for searching and the other to fetch by a unique identifier)
// If you API has Authentication - you would handle it here too.
const superagent=require('superagent');
const url=require('./config.json');


// a function that accepts input data and return search results with Id , name  

const search = async (input,limit,sort) => {
    const searchURL = `${url.url}/games/?search=${input}&fields=id,name&limit=${limit}&sort id asc`;
    try {
         console.log(`Searching for ${input}...`)
         const responce = await superagent.post(searchURL).set({"Accept":'application/json',"user-key": url.key});
         return responce.body;
    } catch (error) {
        return error;
    }
};


const searchByID=async (input)=>{
    const URL = `${url.url}/games`;
    try {   
        const responce = await superagent.post(URL).set({"Accept":'application/json',"user-key": url.key}).send(`fields *;where id=${input};`)
        return responce.body
            
    } catch (error) {
        return error;
    }

}



// export these functions so they can be used

module.exports={search,searchByID}