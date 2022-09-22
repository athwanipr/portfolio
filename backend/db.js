const mongoose = require ('mongoose');

const mongoURI = "mongodb://localhost:27017/portfolio";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("Connection successful");
    })
    .catch(()=>{
        console.log("Error in connection");
    })
}

module.exports=connectToMongo; 