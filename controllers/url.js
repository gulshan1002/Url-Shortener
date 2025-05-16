const URL = require('../models/url');
const {nanoid} = require('nanoid');

const generateURL = async (req, res) =>{
    const shortID = nanoid(8);
    try{
        const {originalURL} = req.body;
        await URL.create({
            shortID: shortID,
            redirectURL:originalURL,
            visitedHistory:[]
        });
        res.send({
            status:201,
            message:"Short Url Created",
            data:{
                shortID: shortID
            }
        })
    }catch(err){
        res.send({
            status:500,
            message:"Something error occured!",
            data:{
                err:err
            }
        })
    }
};

const redirectURL = async (req, res) =>{
    try{
        const shortID = req.params.id;
        const url = await URL.findOne({shortID:shortID});
        url.visitHistory.push({timeStamp:Date.now()});
        await url.save();
        res.send({
            status:200,
            message:"URL Redirected Successfully",
            redirectURL:url.redirectURL
        })
    }catch(err){
        res.send({
            status:500,
            message:"Some error occured!",
            
        });
    }
};

const getClickCounts = async(req, res) =>{
    try{
        const shortID = req.params.id;
        const url = await URL.findOne({shortID:shortID});
        const count = url.visitHistory.length;
        res.send({
            status:200,
            message:"Click Count Fetched Succesfully!",
            count:count
        })
    }catch(err){
        res.send({
            status:500,
            message:"Some error occured",
            err:err
        })
    }
};
module.exports = {generateURL, redirectURL, getClickCounts};