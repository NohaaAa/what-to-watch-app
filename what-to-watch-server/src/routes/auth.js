const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

//check if userEmail is existed before:
const findUserByEmail = async(userEmail) => {
    const user = await User.findOne({email: userEmail});
    if(user) {
        return user;
    } else {
        return undefined;
    }
}

const checkUserPassword = (dbPassword,userPassword) => {
    //decrypt the user pass to compare with the received pass
    const hashedPassword =  CryptoJS.AES.decrypt(
        dbPassword,
        process.env.SECRET_KEY
    );
    return hashedPassword.toString(CryptoJS.enc.Utf8) === userPassword;
}

//Signup
router.post("/signup", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.SECRET_KEY)
            .toString()
    });
    try {
        const user = await newUser.save();
        res.status(201).json(user);
    }catch(err) {
        res.status(500).json(err);
    }
});

//login
router.post("/login", async(req, res) => {
    if(req.body.email && req.body.password) {
        try{
            //find the user by his unique email
            const user = await findUserByEmail(req.body.email);
            //if no user, send an error code
            !user && res.status(400).json("Wrong Email!");
            !checkUserPassword(user.password, req.body.password) &&
            res.status(401).json("wrong password!");
            //send back user info except for password
            const {password, ...info} = user['_doc'];
            //create user token
            const accessToken = jwt.sign({
                id: info['_id'],
            }, process.env.JWT_SEC, {expiresIn: "3d"});
            checkUserPassword(user.password, req.body.password) && user && res.status(200).json({...info, accessToken});
        }catch(err) {
            res.status(500).json(err);
        }
    } else {
        res.status(400).json("Bad Request!");
    }
});

module.exports = router;
