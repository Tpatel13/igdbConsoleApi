

const numberValidator=(input)=>{
     return isNaN(input) || (input % 1 != 0) || input<=0 
}

const nullDataValidaor=(input)=>{
     if(input.length==0 || input==[] || input ==null || input== undefined) return true
     else
     return false
}
module.exports={numberValidator,nullDataValidaor}