const mongoose = require('mongoose');

const recommendationSchema = mongoose.Schema({

    refereeName:{
        type:String
    },

    refereeCompany:{
        type:String
    },

    refereeJobtitle:{
        type:String
    },

    referralDate:{
        type:String
    },

    referralText:{
        type:String
    },

    

})

module.exports=mongoose.model('Recommendation',recommendationSchema);