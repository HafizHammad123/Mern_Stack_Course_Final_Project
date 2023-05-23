const express=require('express')
const cors=require('cors')
const User=require('./Routes/User')
const {connectdb}=require('./db/Connection')
const app=express()
require('./Models/User_Post')

app.use(cors())
app.use(express.json())
 connectdb()

// CALL USER MODULE HERE

  
app.use('/User',User)
app.listen(8000,()=>
{
    console.log("server is in running form")
})
