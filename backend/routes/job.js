const express=require('express');
const router = express.Router();
var fetchuser=require('../middleware/fetchuser');
const Jobdetails = require('../model/Jobdetails');

//ROUTE 1: Get Job details using : Get "api/job/getjobdetails"  require auth
router.get('/getjobdetails',fetchuser,
async (req, res) => {
    try {
        const company = "UPPCL";
        let details = await Jobdetails.findOne({company});
        res.json(details);
        
    }
    catch (error) {
        res.status(500).json({msg:"Internal Server Error"});
    }
}); 


module.exports = router;