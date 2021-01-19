const mongoose=require('mongoose');
const peopleSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    age:{
        type:Number,
        required:true

    },
    hobby:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model("peopleDetails",peopleSchema);