const express = require('express');
const app = express();
const userRoute = express.Router();

//user Model
let user = require('../models/user');

userRoute.route('/create').post((req, res, next)=>{
    user.create(req.body,(error, data)=>{
        if(error){
            return next(error);
        }else{
            res.json(data);
            console.log(data);
        }
    })
})

userRoute.route('/').get((req, res)=>{
    user.find((error, data)=>{
        if(error){
            return next(error);
        }else{
            res.json(data);
        }
    })
})

userRoute.route('/read/:id').get((req, res)=>{
    user.findById(req.params.id,(error, data)=>{
        if(error){
            return next(error);
        }else{
            res.json(data);
        }
    })
})

userRoute.route('/update/:id').put((req, res, next)=>{
    user.findByIdAndUpdate(req.params.id, {
        $set:req.body
    },(error, data)=>{
        if(error){
            return next(error);
        }else{
            res.json(data);
            console.log('Data updated successfully');
        }
    })
})

userRoute.route('/delete/:id').delete((req, res, next)=>{
    user.findOneAndDelete(req.params.email, (error, data)=>{
        if(error){
            return next(error);
        }else{
            res.status(200).json({
                msg:data
            })
        }
    })
})


module.exports = userRoute;