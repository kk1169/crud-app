const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    mobile:{
        type:Number
    }
},{
    collation:'users'
})

module.exports = mongoose.model('user',User);