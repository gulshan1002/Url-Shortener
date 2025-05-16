const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortID:{
        type:String,
        required:true,
        unique:true
    },
    redirectURL:{
        type:String,
        required:true,
        unique:true
    },
    visitHistory:[
        {
            timeStamp:{
                type:Number
            }
        }
    ],
    createdAt:{
        type: Date,
        default:Date.now
    }
});

const URL = mongoose.model('url', urlSchema);

module.exports =URL;