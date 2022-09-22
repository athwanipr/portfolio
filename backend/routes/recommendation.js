const express=require('express');
const router = express.Router();
var fetchuser=require('../middleware/fetchuser');
const Recommendation = require('../model/Recommendation')

//ROUTE 1: Get Recommendation details using : Get "api/recommendation/getrecommendation"  require auth
router.get('/getrecommendation',fetchuser,
async (req, res) => {
    try {
        const refereeName = "Harry";
        let referee = await Recommendation.findOne({refereeName});
        res.json(referee);
        
    }
    catch (error) {
        res.status(500).json({msg:"Internal Server Error"});
    }
}); 

module.exports = router;