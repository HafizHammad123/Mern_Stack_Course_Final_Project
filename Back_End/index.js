const express=require('express')
const cors=require('cors')
const User=require('./Routes/UserRoutes')
const {connectdb}=require('./db/Connection')
const app=express()


app.use(cors())
app.use(express.json({limit: '300mb',extended:true}));
app.use(express.urlencoded({limit: '300mb',extended:true}));
connectdb()

// CALL USER MODULE HERE

  
app.use('/User',User)
app.listen(8000,()=>
{
    console.log("server is in running form")
})
