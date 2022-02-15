
//require('dotenv').config();

function createAPI(){
  return process.env.API
}

module.exports=function(){
  return createAPI;
}