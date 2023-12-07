const express=require('express')
const path=require('path')
const rootDir=require('../utility/path')


const route=express.Router()

route.get('/users',(req,res,next)=>{    
    res.sendFile(path.join(rootDir,'views','users.html'))
})

module.exports= route