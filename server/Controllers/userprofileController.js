const userProfileModel = require('../Models/userprofileModel');
const Joi = require('joi');
require('dotenv').config();

const schema = Joi.object({
    username : Joi.string().alphanum().min(3).max(10).required(),
    email : Joi.string().email().required(),
    password : Joi.string().required(),
});

function validation(username = "anything", email = "anything", password = "anything"){
    const valid = schema.validate({username, email, password});
    if (valid.error == undefined){
        return true;
    }else {
        return false;
    }
};

async function information(req, res){
    try{
        //  const userID = req.user.id;
        const userID = 10;
        const theUser = await userProfileModel.getInformation(userID);
        res.status(200).json(theUser);
    } catch(error){
        
        res.status(500).json(error);
    }
};



async function wishlist(req, res){
    try{
        const userID = 10;
        const wishlist = await userProfileModel.getWishlist(userID);
        res.status(200).json(wishlist);
    } catch(error){
        res.status(500).json(error);
    }
};


async function history(req, res){
    try{
        const userID = 10;
        const history = await userProfileModel.getHistory(userID);
        res.status(200).json(history);
    } catch(error){
        res.status(500).json(error);
    }
};



async function addtowishlist(req, res){
    try{
        const userID = 10;
        const productID = req.params.id;
        const wishlistmodel = await userProfileModel.addwish(userID,productID);
        res.status(200).json(wishlistmodel);
    }catch(error){
        console.log(error);
        res.status(500).json(error);
    }
};



async function editInformation(req, res){
    try{
        const {username, email} = req.body;
        const userID = 10;
        let newData = validation(username, email);
        if (newData){
            const newuser = await userProfileModel.editInfo(userID, username, email);
            res.status(200).json(newuser);
        }else {
            res.status(400).json("invalid inputs");
        }
    } catch(error){
        res.status(500).json(error);
    }
};



async function editWishlist(req, res){
    try{
        const id = req.params.id;
        const userID = 10;
        const wishlist = await userProfileModel.deleteFromWishlist(id, id);
        res.status(200).json(wishlist);
    } catch(error){
        res.status(500).json(error);
    }
};



async function logout(req, res){
    try{
        const userID = 10;
        const offline = userProfileModel.off(userID);
        res.clearCookie('token');
        
        res.status(200).json("logout")
        // res.redirect('/login'); for somewere
    }catch(error){console.log(error)
        res.status(500).json(error);
    }
}


module.exports = {
    information,
    wishlist,
    history,
    addtowishlist,
    editInformation,
    editWishlist,
    logout
    
};