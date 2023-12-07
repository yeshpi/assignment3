const express=require('express')
const path=require('path')
const rootDir=require('../utility/path')
const route=express.Router()

route.get('/',(req,res,next)=>{
    //res.send('<h1>what</h1>')
    res.sendFile(path.join(rootDir,'views','home.html'))
})


module.exports= route