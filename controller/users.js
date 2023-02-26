const express = require('express')
const usersPro= require('../models/Project')

const getUsers = (req,res)=>{
   
        res.render('../views/index')
}

const setDetail =async(req,res)=>{
try {
    const user = new usersPro(req.body);
    console.log(req.body)
    const data = await user.save();
    res.status(200).send({data});
} catch (error) {
    console.log(error)
}
}


module.exports ={
    getUsers,
    setDetail,
}