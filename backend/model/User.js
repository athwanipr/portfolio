const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    
    name:{
        type:String,
        required:true,    
    },
    age:{
        type:String,  
    },
    mobileno:{
        type:String, 
        unique:true,
        required:true   
    },
    email:{
        type:String,
    },
    password:{
        type:String,
        required:true  
    },
    role:{
        type:String,
        required:true    
    },
    image:{
        type:String,
        default:"http://localhost:8080/upload/employeeImage.png"
    },
    address:{
        type:String
    },
    about:{
        type:String,
    }

    
    
})

module.exports=mongoose.model('User',userSchema);