const express=require('express')
const cors=require('cors')
const User=require('./Routes/UserRoutes')
const {connectdb}=require('./db/Connection')
var bodyParser = require('body-parser');
const app=express()



app.use(cors())
// app.use(bodyParser())
app.use(bodyParser.json({parameterLimit:700000,limit: '50mb', extended: true}))
app.use(bodyParser.urlencoded({limit: '50mb', extended: true,type: 'application/json'}))
app.use(express.json());
// app.use(express.urlencoded({limit: '25mb'}));
connectdb()

// CALL USER MODULE HERE

  
app.use('/User',User)
app.listen(8000,()=>
{
    console.log("server is in running form")
})
