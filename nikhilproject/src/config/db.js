const mongoose=require("mongoose");
require("dotenv").config();
const connect=()=>{
   mongoose.connect(process.env.SERVER);
};
module.exports=connect;