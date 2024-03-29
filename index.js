const express=require('express')
const bodyParser=require('body-parser')
const path=require('path')

const homeRoute=require('./route/home')
const usersRoute=require('./route/users')
let port=3000

const app=express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))

app.use(usersRoute)
app.use(homeRoute)
app.listen(port)

