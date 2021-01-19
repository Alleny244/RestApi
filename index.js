const express=require('express');

const app=express();
const mongoose=require('mongoose');

const port=3005 || process.env.PORT;

mongoose.connect("mongodb+srv://allen:789@first.6gdnr.mongodb.net/people?retryWrites=true&w=majority",{ useUnifiedTopology: true },{ useNewUrlParser: true } );
const db=mongoose.connection;
db.on("error",error=>console.error(error));
db.once("open",open=>console.log("Database Connected"));


app.use(express.json());

const peopleRouter=require('./routers/people');
app.use('/people',peopleRouter);
app.listen(port,()=>{
    console.log("Server Started up and running");
});