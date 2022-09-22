const mongoose = require('mongoose');

const jobdetailsSchema = mongoose.Schema({

    company:{
        type:String
    },

    jobtitle:{
        type:String
    },

    jobduration:{
        type:String
    },

    projects:{
        type:String
    }


})

module.exports=mongoose.model('Jobdetails',jobdetailsSchema);