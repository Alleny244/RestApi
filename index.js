const express=require('express');
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
  }

const app=express();
const mongoose=require('mongoose');

const PORT=3005 || process.env.PORT;

mongoose.connect(process.env.url,{ useUnifiedTopology: true },{ useNewUrlParser: true } );
const db=mongoose.connection;
db.on("error",error=>console.error(error));
db.once("open",open=>console.log("Database Connected"));


app.use(express.json());

const peopleRouter=require('./routers/people');
app.use('/people',peopleRouter);
app.listen(PORT,()=>{
    console.log("Server Started up and running");
});