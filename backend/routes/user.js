const express=require('express');
const router = express.Router();
const User = require('../model/User')

const bcrypt = require('bcryptjs');


var jwt = require('jsonwebtoken');
const JWT_SECRET = 'uppcl%portfolio##$$@@'

var fetchuser=require('../middleware/fetchuser');


//ROUTE 1: Create a user using : POST "api/user/createuser" doesnot require token
router.post('/createuser',
    async (req, res) => {
        try {
            //Check if user with same mobile no exists
            let user = await User.findOne({ mobileno: req.body.mobileno});
            if (user) {
                return res.status(400).json({ code:2, msg: "User with same mobile no already exists" });
            }

            //Password hashing
            var salt =  bcrypt.genSaltSync(10);
            const securePassword = await bcrypt.hash(req.body.password, salt);

            //Creating employee or saving details in database
            user = await User.create({
                name: req.body.name,
                age: req.body.age,
                mobileno:req.body.mobileno,
                email: req.body.email,
                password: securePassword,
                role:req.body.role,
                about:req.body.about   
            });

            res.json({code:1,msg:"User Creation Successful"})
        }
        catch (error) {
            res.status(500).json({code:3, msg:"Internal Server Error"});
        }
    });


//ROUTE 2: Login a user using : POST "api/user/login" doesnot require token
router.post('/login',
async (req, res) => {
    const { mobileno, password } = req.body;
    try {

        let user = await User.findOne({ mobileno });
        if (!user) {
            return res.json({code:2, msg: "User does not exist" });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        
        if (!passwordCompare) {
            return res.json({ code:2, msg: "Please try to login with correct credentials" });
        }

        //Auth Token Generation
            const data = {
                user: {
                    id: user._id
                }
            }
            const authToken = jwt.sign(data, JWT_SECRET);
            res.status(200).json({ code:1, authToken:authToken, role:user.role});
    }
    catch (error) {
        res.status(500).json({code:3,msg:"Internal Server Error"});
    }
});

//ROUTE 3: Get logged in user details using : Get "api/user/getuser"  require auth
router.get('/getuser',fetchuser,
    async (req, res) => {
        try {
            const mobileno = 9453234077;
            let user = await User.findOne({mobileno}).select("-password");
            res.json(user);
            
        }
        catch (error) {
            res.status(500).json({msg:"Internal Server Error"});
        }
    });

   

module.exports = router;