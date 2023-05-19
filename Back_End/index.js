const express=require('express')
const cors=require('cors')
const app=express()
app.use(cors())



// Create Api Here

// signup api

app.put('/User_Signup',(req,res)=>
{

})

// User Blog Post Create Api

app.put('/User_CreatePost',(req,res)=>
{

})

// User Blog Post Delete Api

app.delete('/User_DeletePost',(req,res)=>
{
    
})






app.listen(8000,()=>
{
    console.log("server is in running form")
})
